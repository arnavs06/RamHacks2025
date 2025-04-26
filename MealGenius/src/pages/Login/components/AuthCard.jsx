import { motion } from 'framer-motion';

export default function AuthCard({ children }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 w-full max-w-md"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.div>
  );
}