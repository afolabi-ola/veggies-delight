import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Navbar from './_components/Navbar';
import { CartProvider } from './_context/CartContext';
import { CartSidebar } from './_components/CartSidebar';
import AppToaster from './_components/AppToaster';
import SessionProviderWrapper from './_components/SessionProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Food Around You | Fresh Farm Produce',
    template: '%s | Food Around You',
  },
  description:
    'Buy fresh farm produce delivered to your doorstep in real-time.',
  keywords: ['fresh food', 'vegetables', 'organic', 'farm produce'],
  authors: [{ name: 'Food Around You' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://foodaroundyou.vercel.app',
    title: 'Food Around You | Fresh Farm Produce',
    description:
      'Buy fresh farm produce delivered to your doorstep in real-time.',
    siteName: 'Food Around You',
    images: [
      {
        url: '/images/logo3.png',
        width: 800,
        height: 600,
        alt: 'Food Around You Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Around You | Fresh Farm Produce',
    description: 'Healthy, organic farm produce delivered to you.',
    images: ['/images/logo3.png'],
    creator: '@afolabi_qu73144',
  },
  icons: {
    icon: '/images/logo3.png',
    apple: '/images/logo3.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <SessionProviderWrapper>
        <CartProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            <main className='min-h-screen bg-gray-50'>
              {children}
              <CartSidebar />
              <AppToaster />
            </main>
          </body>
        </CartProvider>
      </SessionProviderWrapper>
    </html>
  );
}
