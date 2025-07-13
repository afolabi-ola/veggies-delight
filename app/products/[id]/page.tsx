// app/products/[id]/page.tsx
'use client';
import { useParams, notFound } from 'next/navigation';
import { products } from '@/app/_lib/products';
import { useCart } from '@/app/_context/CartContext';
import Image from 'next/image';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return notFound();

  /* mock vendor for now */
  const vendor = {
    name: 'Green Farm Ltd.',
    avatar: '/images/vendor.jpeg',
    phone: '+234 800-123-4567',
  };

  return (
    <main className='min-h-screen bg-gray-50 py-10 px-6'>
      <div className='max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='relative w-full h-64 md:h-96 rounded-xl overflow-hidden'>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className='object-cover'
            />
          </div>

          <div>
            <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
            <p className='text-green-700 text-xl font-semibold mb-4'>
              {product.price.toLocaleString('en-NG', {
                style: 'currency',
                currency: 'NGN',
              })}
            </p>

            {/* Vendor info */}
            <div className='flex items-center gap-3 mb-6'>
              <Image
                src={vendor.avatar}
                alt={vendor.name}
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <p className='font-medium'>{vendor.name}</p>
                <p className='text-sm text-gray-500'>{vendor.phone}</p>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className='bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full w-full md:w-auto'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
