import { motion } from "framer-motion";
import { Heart, Zap, Apple } from 'lucide-react';
import { useInView } from "react-intersection-observer";

const STEPS = [
  {
    icon: <Heart className="w-10 h-10 text-orange-500" />,
    title: "Tell Us Your Preferences",
    desc: "Food likes/dislikes, allergies, diet type"
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Set Your Goals",
    desc: "Weight loss, muscle gain, maintenance"
  },
  {
    icon: <Apple className="w-10 h-10 text-orange-500" />,
    title: "Get Custom Meals",
    desc: "AI-generated weekly plan with recipes"
  }
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="bg-orange-50 py-24 dark:bg-orange-900/10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
        >
          How It Works
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {STEPS.map((step, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mx-auto w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-6"
                variants={iconVariants}
              >
                {step.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.2 }
                  }
                }}
              >
                {step.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}