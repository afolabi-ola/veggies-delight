// app/products/page.tsx
'use client';
import { products } from '@/app/_lib/products';
import { ProductCard } from '@/app/_components/ProductCard';
import { useCart } from '@/app/_context/CartContext';
import { useEffect, useRef, useState } from 'react';
import Button from '../_components/Button';
import { HiOutlineSearch } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

export default function Page() {
  const { addToCart } = useCart();
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);
  const [userSearch, setUserSearch] = useState('');
  const [isUserSearch, setIsUserSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && isUserSearch) {
      inputRef.current.focus();
    }
  }, [isUserSearch]);

  const displaySize = isFullyDisplayed ? products.length : 12;

  const productDisplay = products.filter((product) =>
    product.name.toLowerCase().includes(userSearch.toLowerCase()),
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <main className='min-h-screen bg-gray-50 py-12 px-12'>
      <header
        className={`flex justify-between mb-5   ${
          isUserSearch
            ? 'flex-col-reverse items-start lg:flex-row lg:items-center'
            : 'flex-row items-center'
        }`}
      >
        <div>
          <h1 className='font-bold text-green-800 text-2xl'>All Products</h1>
          <p className='text-gray-500'>Take a look of our fresh products</p>
        </div>
        <div className='border border-gray-400 flex items-center h-8 rounded-2xl px-2 cursor-pointer'>
          <span className='flex'>
            <input
              ref={inputRef}
              type='text'
              aria-label='search'
              placeholder='search'
              className={`outline-0 lg:block  ${
                isUserSearch
                  ? 'w-full transition-[width] duration-1000'
                  : 'w-0 lg:transition-[width] lg:duration-1000'
              }`}
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
            <span
              className={`text-secondary ${isUserSearch ? 'flex' : 'hidden'}`}
              onClick={() => {
                setUserSearch('');
                setIsUserSearch(false);
              }}
            >
              &times;
            </span>
          </span>
          <HiOutlineSearch
            className={`text-secondary ${isUserSearch ? 'hidden' : 'block'}`}
            onClick={() => setIsUserSearch(true)}
          />
        </div>
      </header>

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl lg:w-full lg:max-w-full'
        // key={isFullyDisplayed ? 'expanded' : 'collapsed'}
      >
        <AnimatePresence>
          {productDisplay.slice(0, displaySize).map((p, i) => (
            <motion.div
              key={p.id + i}
              variants={item}
              initial='hidden'
              animate='show'
              exit={{ opacity: 0, y: -20 }}
            >
              <ProductCard
                key={i}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                onAddToCart={() => addToCart(p)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className='w-full flex justify-center mt-5'>
        {userSearch.length === 0 && (
          <Button onClick={() => setIsFullyDisplayed(!isFullyDisplayed)}>
            {isFullyDisplayed ? 'Collapse' : 'View all'}
          </Button>
        )}
      </div>
    </main>
  );
}
