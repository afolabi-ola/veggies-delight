'use client';

import Image from 'next/image';
import { products } from './_lib/products';
import { ProductCard } from './_components/ProductCard';
import Link from 'next/link';
import { useCart } from './_context/CartContext';
import { motion } from 'framer-motion';
import HowItWorks from './_components/HowItWorks';

export default function Page() {
  const { addToCart } = useCart();

  return (
    <>
      {/* Hero Section Adding comment to trigger redeploy*/}
      <section className='bg-green-700 text-white pt-10 pb-20 px-6 text-center'>
        <div className='items-center w-full flex flex-col-reverse gap-4 md:flex-row lg:flex-row md:justify-around lg:justify-around'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='md:w-lg'
          >
            {/* <h1 className='text-4xl md:text-5xl font-bold max-w-4xl lg:mx-auto mb-4'>
              You Are What You Eat
            </h1> */}
            <h1 className='text-4xl md:text-5xl font-bold max-w-4xl lg:mx-auto mb-4'>
              Fresh farm produce delivered to your door step in real-time
            </h1>
            <p className='text-lg md:text-xl max-w-2xl mx-auto mb-8'>
              Fresh farm produce delivered straight to your doorstep. Healthy,
              organic, and affordable.
            </p>
            <Link
              href='/products'
              className='inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow transition duration-500 w-3xs hover:bg-green-400 hover:text-white'
            >
              Shop Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
            viewport={{ once: true }}
            className='border relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto lg:ml-0 lg:mr-0 rounded-full overflow-hidden'
          >
            <Image
              src={'/images/herobanner3.jpeg'}
              alt={'vegetables'}
              fill
              className='object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-6 max-w-7xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-3xl font-semibold mb-6 text-green-800'
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-gray-700 max-w-3xl mx-auto leading-relaxed'
        >
          We offer fresh farm produce directly to your doorstep in real time. No
          middlemen, no delays, all at your convinience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mt-5 flex flex-col gap-6 lg:flex lg:flex-row lg:justify-around w-full'
        >
          <div>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[400px] lg:h-[300px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/freshcorn.jpeg'}
                alt='An image of fresh corn on it plant'
                fill
                className='object-cover'
              />
            </div>
            {/* <h1 className='text-2xl md:mt-4'>Fresh</h1> */}
          </div>

          <div>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[400px] lg:h-[300px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/freshtomatoes.jpeg'}
                alt='Fresh farm produce on display, with veggies like tomatoes, chill, scoth bonnet, pumpkin etc'
                fill
                className='object-cover'
              />
            </div>
            {/* <h1 className='text-2xl md:mt-4'>Quick</h1> */}
          </div>

          <div>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[400px] lg:h-[300px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/grainsack.jpeg'}
                alt='A sack of grain with the dollar sign on the sack and a hand offering it.'
                fill
                className='object-cover'
              />
            </div>
            {/* <h1 className='text-2xl md:mt-4'>Affordable</h1> */}
          </div>
        </motion.div>
      </section>
      {/* How it works */}
      <HowItWorks />
      {/* Products Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        id='products'
        className='py-16 px-6 max-w-6xl mx-auto'
      >
        <h2 className='text-3xl font-semibold mb-8 text-green-800 text-center'>
          Fresh Produce
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center'
      >
        <Link
          href='/products'
          className='inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-800 transition'
        >
          View All Products
        </Link>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='bg-green-700 text-white py-6 text-center mt-5'
      >
        <p>© 2025 Food Around You. All rights reserved.</p>
      </motion.footer>
    </>
  );
}
