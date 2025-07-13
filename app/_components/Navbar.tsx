'use client';
import Logo from './Logo';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { push } = useRouter();
  return (
    <nav className='lg:px-20 border-b-background flex justify-between items-center border py-2 bg-primary'>
      <Logo />
      <button
        onClick={() => push('/login')}
        className='px-2 py-1 rounded-2xl h-full md:inline-block lg:inline-block bg-white text-green-700 font-semibold md:px-6 md:py-3 md:rounded-full lg:px-6 lg:py-3 lg:rounded-full shadow transition duration-500 lg:w-3xs md:w-3xs hover:bg-green-400 hover:text-white cursor-pointer'
      >
        Log in
      </button>
    </nav>
  );
}
