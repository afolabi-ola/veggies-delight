import Image from 'next/image';
import { useState } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

export function ProductCard({
  name,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = function () {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = function () {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className='bg-white rounded-2xl shadow-md p-4 transition hover:shadow-lg group cursor-pointer'>
      <div className='w-full h-[300px] relative overflow-hidden rounded-2xl'>
        <Image
          src={image}
          alt={name}
          className='w-full h-40 object-cover rounded-xl mb-3'
          loading='lazy'
          objectFit='cover'
          fill
        />
        <div className='absolute flex transition-all duration-700 flex-col inset-0 w-full h-full items-center justify-center bg-slate-900 opacity-80 transform -translate-x-full group-hover:translate-0'>
          <button
            onClick={onAddToCart}
            className='min-w-28 max-w-32 mt-3 h-10 max-h-10 bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-xl transition-colors cursor-pointer duration-300 opacity-100'
          >
            View Product
          </button>
          <button
            onClick={onAddToCart}
            className='min-w-28 max-w-32 mt-3 h-12 max-h-10 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl transition cursor-pointer duration-300 opacity-100'
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h2 className='text-lg flex justify-center mt-5'>{name}</h2>

      <div className='flex justify-between flex-row-reverse'>
        <div className='flex gap-1 w-full justify-end text-orange-400 text-xs mt-2'>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < 3 ? <FaStar /> : i === 3 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
          ))}
        </div>
        <p className='text-green-600 font-bold text-sm w-full flex justify-start mt-2'>
          ₦{price.toLocaleString()}
        </p>
      </div>

      <div className='mt-3 flex items-end gap-2'>
        <div className='border border-gray-300 flex'>
          <input
            type='text'
            name='quantity'
            id='quantity'
            aria-label='quantity'
            className='w-14 flex-1 h-10 max-h-10 px-2 outline-0'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <span className='flex flex-col gap-0.5 justify-center px-1'>
            <button
              className='bg-gray-300 px-1 text-xs text-gray-600 cursor-pointer'
              onClick={handleIncrement}
            >
              +
            </button>
            <button
              className='bg-gray-300 px-1 text-xs text-gray-600 cursor-pointer'
              onClick={handleDecrement}
            >
              -
            </button>
          </span>
        </div>
        <button
          onClick={onAddToCart}
          className='w-full flex-1 mt-3 h-12 max-h-10 bg-green-600 hover:bg-green-700 text-white py-2 px-4 transition cursor-pointer duration-300'
        >
          Add to Cart
        </button>
      </div>
      {/* <div className='flex justify-between gap-4'>
        <p className='text-green-600 font-bold text-sm'>
          ₦{price.toLocaleString()}
        </p>
        <Link
          href='/'
          className='text-orange-500 font-bold text-sm cursor-pointer'
        >
          View Product
        </Link>
      </div> */}
    </div>
  );
}
