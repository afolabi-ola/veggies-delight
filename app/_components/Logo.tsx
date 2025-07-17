import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href={'/'}
      className='relative w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] lg:ml-0 lg:mr-0'
    >
      <Image
        src='/images/logo3.png'
        alt='App Logo'
        fill
        priority
        sizes='50px'
      />
    </Link>
  );
}
