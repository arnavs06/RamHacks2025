import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const AuthSubmitButton = ({ 
  children, 
  loading = false, 
  disabled = false,
  fullWidth = true 
}) => {
  return (
    <motion.button
      type="submit"
      className={`flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors ${
        fullWidth ? 'w-full' : ''
      } ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={{ 
        y: disabled ? 0 : -2, 
        boxShadow: disabled ? 'none' : '0 4px 12px rgba(249, 115, 22, 0.3)'
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          </motion.div>
          Processing...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AuthSubmitButton;