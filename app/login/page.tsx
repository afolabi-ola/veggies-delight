// Updated login page with loading state and retry instructions

'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await signIn('google', { callbackUrl: '/' });
    } catch (err) {
      setError(
        'Something went wrong. Please check your network and try again.',
      );
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6'>
      <div className='max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={60}
          height={60}
          className='mx-auto mb-4'
        />
        <h1 className='text-2xl font-bold mb-2 text-green-700'>Welcome Back</h1>
        <p className='mb-4 text-sm text-gray-600'>
          Sign in to continue shopping
        </p>

        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Connecting...' : 'Continue with Google'}
        </button>

        {loading && (
          <p className='mt-3 text-xs text-gray-500'>
            If this takes too long, check your internet or try again.
          </p>
        )}
      </div>
    </main>
  );
}
