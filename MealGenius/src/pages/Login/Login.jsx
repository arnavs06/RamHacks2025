import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';
import AuthCard from './components/AuthCard';
import AuthFormInput from './components/AuthFormInput';
import AuthHeader from './components/AuthHeader';
import AuthSocialButtons from './components/AuthSocialButtons';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Signup logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-orange-900/10 flex items-center justify-center p-4">
      <AuthCard>
        <AuthHeader 
          title="Create Account" 
          subtitle="Join MealGenius today" 
        />

        <form onSubmit={handleSubmit}>
          <AuthFormInput
            icon={<User className="h-5 w-5 text-gray-400" />}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <AuthFormInput
            icon={<Mail className="h-5 w-5 text-gray-400" />}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthFormInput
            icon={<Lock className="h-5 w-5 text-gray-400" />}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            whileHover={{ y: -1, boxShadow: "0 6px 12px rgba(249, 115, 22, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </motion.button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <AuthSocialButtons />

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 dark:text-orange-400 font-medium hover:underline">
            Sign in
          </a>
        </div>
      </AuthCard>
    </div>
  );
}