import { motion } from 'framer-motion';
import { Calendar, Heart, Utensils, ChevronRight } from 'lucide-react';
import WeeklyMealPlan from './components/WeeklyMealPlan';
import QuickActions from './components/QuickActions';

export default function Dashboard() {
  // Sample user data - replace with actual data from your auth system
  const user = {
    name: "Alex",
    dietaryPreferences: ["Vegetarian", "Gluten-Free"],
    healthGoals: ["Weight Maintenance", "Muscle Tone"]
  };

  const todaysMeals = {
    breakfast: "Avocado Toast with Poached Eggs",
    lunch: "Quinoa Buddha Bowl",
    dinner: "Mushroom Risotto"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-orange-600 dark:text-orange-400">MealGenius</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
              {user.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {user.dietaryPreferences.map((pref, i) => (
              <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                {pref}
              </span>
            ))}
            {user.healthGoals.map((goal, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {goal}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Today's Meals */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Today's Meals</h2>
            <button className="text-orange-600 dark:text-orange-400 flex items-center">
              View all <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(todaysMeals).map(([mealType, mealName], i) => (
              <motion.div
                key={mealType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                    <Utensils className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  <h3 className="font-medium capitalize">{mealType}</h3>
                </div>
                <p className="text-lg font-medium mb-2">{mealName}</p>
                <button className="text-orange-600 dark:text-orange-400 text-sm flex items-center">
                  View recipe <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Weekly Plan Preview */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Your Weekly Plan</h2>
            <button className="text-orange-600 dark:text-orange-400 flex items-center">
              Edit plan <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>
          <WeeklyMealPlan />
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <QuickActions />
        </motion.section>
      </main>
    </motion.div>
  );
}