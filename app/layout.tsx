import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Navbar from './_components/Navbar';
import { CartProvider } from './_context/CartContext';
import { CartSidebar } from './_components/CartSidebar';
import AppToaster from './_components/AppToaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Food Around You',
  description: 'You are what you eat, so eat fresh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
    </html>
  );
}
