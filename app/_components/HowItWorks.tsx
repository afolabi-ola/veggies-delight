// How It Works Section
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function HowItWorks() {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      //   viewport={{ once: true, amount: 0.2 }}
      className='bg-white py-16 px-6 max-w-5xl mx-auto text-center'
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-3xl font-semibold mb-10 text-green-800'
      >
        How It Works
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-4xl mx-auto'
      >
        {[
          {
            img: '/images/personsittingordering.webp',
            text: 'CHOOSE FROM A VARIETY OF FRESH FARM PRODUCE.',
          },
          {
            img: '/images/fullorderfufill.gif',
            text: "PLACE ORDER & SEE MOBILE VENDOR'S LOCATION IN REAL-TIME.",
          },
          {
            img: '/images/delivery.gif',
            text: 'CHAT WITH MOBILE VENDOR AND GET DELIVERY IN MINUTES.',
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className='flex flex-col items-center'
          >
            <div className='border border-gray-500 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[250px] lg:h-[150px] mx-auto lg:ml-0 lg:mr-0 rounded overflow-hidden'>
              <Image
                src={step.img}
                alt='Browse Produce'
                fill
                className='object-cover'
              />
            </div>
            <p className='text-gray-600 text-sm mt-2'>{step.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
