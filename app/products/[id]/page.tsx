// app/products/[id]/page.tsx
'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { products } from '@/app/_lib/products';
import { useCart } from '@/app/_context/CartContext';
import Image from 'next/image';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import Button from '@/app/_components/Button';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { back } = useRouter();

  if (!product) return notFound();

  /* Mock vendor for now */
  const vendor = {
    name: 'Green Farm Ltd.',
    avatar: '/images/vendor.jpeg',
  };

  return (
    <main className='min-h-screen bg-gray-50 py-10 px-4 sm:px-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='w-full flex justify-end'
      >
        <Button width='w-full sm:w-auto mb-2' onClick={back}>
          &larr; Back
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10'
      >
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Product Image */}
          <div className='relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden'>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className='object-cover'
            />
          </div>

          {/* Product Info */}
          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='text-3xl font-bold text-gray-800 mb-3'>
                {product.name}
              </h1>
              <p className='text-green-700 text-2xl font-extrabold mb-4'>
                {product.price.toLocaleString('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                })}
              </p>

              {/* Vendor Info */}
              <div className='flex items-center gap-4 mb-6 p-4 border rounded-lg bg-gray-50'>
                <Image
                  src={vendor.avatar}
                  alt={vendor.name}
                  width={50}
                  height={50}
                  className='rounded-full border'
                />
                <div>
                  <p className='font-semibold text-gray-700'>{vendor.name}</p>
                  <button
                    className='flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm mt-1'
                    onClick={() => alert('Chat feature coming soon!')}
                  >
                    <FaRegCommentDots /> Chat with Vendor
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Fresh and organically grown produce from local farms. Packed
                with nutrients and delivered with care. Perfect for your healthy
                lifestyle.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
              <button
                onClick={() => addToCart(product)}
                className='flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition w-full sm:w-auto'
              >
                <IoCartOutline className='text-lg' /> Add to Cart
              </button>
              <button
                onClick={() => alert('Feature coming soon!')}
                className='flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto'
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className='mt-10 grid sm:grid-cols-3 gap-4 text-center'>
          <div className='p-4 bg-gray-50 rounded-lg shadow-sm'>
            <p className='font-bold text-green-700'>✔ Secure Payment</p>
            <p className='text-sm text-gray-500'>
              Safe and encrypted transactions
            </p>
          </div>
          <div className='p-4 bg-gray-50 rounded-lg shadow-sm'>
            <p className='font-bold text-green-700'>✔ Fast Delivery</p>
            <p className='text-sm text-gray-500'>
              Fresh products at your doorstep
            </p>
          </div>
          <div className='p-4 bg-gray-50 rounded-lg shadow-sm'>
            <p className='font-bold text-green-700'>✔ Quality Guaranteed</p>
            <p className='text-sm text-gray-500'>100% organic farm produce</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
