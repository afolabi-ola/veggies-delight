'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Button from '../_components/Button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Page() {
  const { data: session } = useSession();
  const { push } = useRouter();
  return (
    <main className='min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center'
      >
        <Image
          src={!session ? '/images/logo.png' : (session.user?.image as string)}
          alt='Logo'
          width={60}
          height={60}
          className='mx-auto mb-4 rounded-full border-2 border-green-600'
        />
        <h1 className='text-2xl font-bold mb-2 text-green-700'>Welcome Back</h1>
        <p className=' text-sm text-gray-600'>
          {!session ? 'Sign in to continue shopping' : session.user?.name}
        </p>
        <p className='text-sm text-gray-600'>
          {session && session.user?.email}
        </p>
        <Button
          onClick={() => {
            if (!session) {
              push('/login');
            } else {
              signOut();
            }
          }}
          style='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full font-semibold mt-6'
        >
          {!session ? 'Go To Login' : 'Sign Out'}
        </Button>
      </motion.div>
    </main>
  );
}
