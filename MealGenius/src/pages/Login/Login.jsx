import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import AuthCard from './components/AuthCard';
import AuthFormInput from './components/AuthFormInput';
import AuthHeader from './components/AuthHeader';
import AuthSocialButtons from './components/AuthSocialButtons';
import AuthSubmitButton from './components/AuthSubmitButton';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Authentication logic here
    setTimeout(() => setIsLoading(false), 1500); // Simulate loading
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-orange-900/10 flex items-center justify-center p-4">
      <AuthCard>
        <AuthHeader 
          title="Welcome Back" 
          subtitle="Sign in to your MealGenius account"
          showLogo={true}
        />

        <form onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link 
                to="/forgot-password" 
                className="font-medium text-orange-600 dark:text-orange-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <AuthSubmitButton loading={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </AuthSubmitButton>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <AuthSocialButtons />

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          New to MealGenius?{' '}
          <Link 
            to="/signup" 
            className="font-medium text-orange-600 dark:text-orange-400 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </AuthCard>
    </div>
  );
}