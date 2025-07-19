import { motion } from 'framer-motion';

export default function Button({
  onClick,
  children,
  style = 'rounded-full bg-green-700 hover:bg-green-800',
  width = '',
}: {
  onClick: () => void;
  children: React.ReactNode;
  style?: string;
  width?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`${width} ${style} inline-block  text-white font-semibold px-6 py-3  shadow  transition cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
