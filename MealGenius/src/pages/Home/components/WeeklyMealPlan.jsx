import { motion } from 'framer-motion';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeeklyMealPlan() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <motion.div 
            key={day}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i }}
            className="text-center"
          >
            <div className="text-sm font-medium mb-2">{day}</div>
            <div className="h-16 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
              <Utensils className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}