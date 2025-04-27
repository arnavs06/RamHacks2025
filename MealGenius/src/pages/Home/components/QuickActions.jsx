import { motion } from 'framer-motion';
import { Plus, ShoppingCart, Heart, Settings } from 'lucide-react';

const actions = [
  { icon: <Plus />, label: "Add Custom Meal", color: "bg-blue-100 text-blue-600" },
  { icon: <ShoppingCart />, label: "Generate Grocery List", color: "bg-green-100 text-green-600" },
  { icon: <Heart />, label: "Favorite Recipes", color: "bg-pink-100 text-pink-600" },
  { icon: <Settings />, label: "Diet Settings", color: "bg-purple-100 text-purple-600" }
];

export default function QuickActions() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className={`p-4 rounded-xl flex flex-col items-center ${action.color} dark:bg-opacity-20 dark:text-opacity-90`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-3">
            {action.icon}
          </div>
          <span className="font-medium text-center">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
}