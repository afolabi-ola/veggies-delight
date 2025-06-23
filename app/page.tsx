import Image from "next/image";
import Logo from '@/app/_components/Logo';

export default function Page() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-green-700 text-white pt-10 pb-20 px-6 text-center'>
        <nav className='lg:px-20 mb-20 flex justify-between items-center'>
          <Logo />
          <button className='px-2 py-1 rounded-2xl h-full md:inline-block lg:inline-block bg-white text-green-700 font-semibold md:px-6 md:py-3 md:rounded-full lg:px-6 lg:py-3 lg:rounded-full shadow transition duration-500 lg:w-3xs md:w-3xs hover:bg-green-400 hover:text-white'>
            Log in
          </button>
        </nav>
        <div className='items-center w-full flex flex-col-reverse gap-4 md:flex-row lg:flex-row md:justify-around lg:justify-around'>
          <div className='md:w-lg'>
            <h1 className='text-4xl md:text-5xl font-bold max-w-4xl lg:mx-auto mb-4'>
              You Are What You Eat
            </h1>
            <p className='text-lg md:text-xl max-w-2xl mx-auto mb-8'>
              Fresh farm produce delivered straight to your doorstep. Healthy,
              organic, and affordable.
            </p>
            <a
              href='#products'
              className='inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow transition duration-500 w-3xs hover:bg-green-400 hover:text-white'
            >
              Shop Now
            </a>
          </div>
          <div className='border relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto lg:ml-0 lg:mr-0 rounded-full overflow-hidden'>
            <Image
              src={'/images/herobanner3.jpeg'}
              alt={'vegetables'}
              fill
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-6 max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl font-semibold mb-6 text-green-800'>About Us</h2>
        <p className='text-gray-700 max-w-3xl mx-auto leading-relaxed'>
          We believe in bringing the freshest farm produce directly from local
          farmers to you. No middlemen, no delays — just pure, wholesome food.
        </p>
        <div className='mt-5 flex flex-col gap-6 lg:flex lg:justify-around w-full'>
          <div>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[400px] lg:h-[300px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/freshcorn.jpeg'}
                alt='An image of fresh corn on it plant'
                fill
                className='object-cover'
              />
            </div>
            <h1 className='text-2xl md:mt-4'>Fresh</h1>
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
            <h1 className='text-2xl md:mt-4'>Quick</h1>
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
            <h1 className='text-2xl md:mt-4'>Affordable</h1>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='bg-white py-16 px-6 max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl font-semibold mb-10 text-green-800'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[250px] lg:h-[150px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/grainsack.jpeg'}
                alt=''
                fill
                objectFit='cover'
              />
            </div>
            <h3 className='font-semibold mb-2 text-green-700'>
              1. Browse Produce
            </h3>
            <p className='text-gray-600'>
              Choose from a variety of fresh fruits and vegetables.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[250px] lg:h-[150px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/grainsack.jpeg'}
                alt=''
                fill
                objectFit='cover'
              />
            </div>
            <h3 className='font-semibold mb-2 text-green-700'>
              2. Place Order
            </h3>
            <p className='text-gray-600'>
              Add items to your cart and place your order quickly and securely.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[250px] lg:h-[150px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={'/images/grainsack.jpeg'}
                alt=''
                fill
                objectFit='cover'
              />
            </div>
            <h3 className='font-semibold mb-2 text-green-700'>
              3. Delivered to You
            </h3>
            <p className='text-gray-600'>
              We deliver straight to your door, fresh and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      {/* <section id='products' className='py-16 px-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-semibold mb-8 text-green-800 text-center'>
          Fresh Produce
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => alert('Add to cart - demo only')}
            />
          ))}
        </div>
      </section> */}

      {/* Footer */}
      <footer className='bg-green-700 text-white py-6 text-center'>
        <p>© 2025 Fresh Farm Produce. All rights reserved.</p>
      </footer>
    </main>
  );
}
