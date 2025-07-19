'use client';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { push } = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav className='border bg-primary  border-b-background'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='lg:px-20 flex justify-between items-center py-2 px-5'
      >
        <Logo />
        {!session ? (
          pathname !== '/login' && (
            <button
              onClick={() => push('/login')}
              className='px-2 py-1 rounded-2xl h-full md:inline-block lg:inline-block bg-white text-green-700 font-semibold md:px-6 md:py-3 md:rounded-full lg:px-6 lg:py-3 lg:rounded-full shadow transition duration-500 lg:w-3xs md:w-3xs hover:bg-green-400 hover:text-white cursor-pointer'
            >
              Log in
            </button>
          )
        ) : (
          <Image
            src={session.user?.image as string}
            alt='User Avatar'
            onClick={() => push('/profile')}
            width={40}
            height={40}
            className=' rounded-full cursor-pointer'
          />
        )}
      </motion.div>
    </nav>
  );
}
