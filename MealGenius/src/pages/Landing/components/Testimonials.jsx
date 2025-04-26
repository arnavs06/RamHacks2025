import { motion } from "framer-motion";
import { FaHeart } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

const TESTIMONIALS = [
  {
    quote: "Finally a plan I can stick to! The meals are delicious and easy to make.",
    author: "Moheed B.",
    stars: 5,
    role: "Fitness Coach"
  },
  {
    quote: "As a vegan with allergies, this app saved me so much time.",
    author: "Eissah T.",
    stars: 4,
    role: "Nutritionist"
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      className="py-24 container mx-auto px-4 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-orange-900/10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
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
        Loved by Users
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div 
            key={i}
            className="border border-gray-200 dark:border-gray-700 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.stars)].map((_, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={starVariants}
                  className="text-orange-500 dark:text-orange-400"
                >
                  <FaHeart className="w-5 h-5" />
                </motion.span>
              ))}
            </div>
            <motion.p 
              className="text-lg md:text-xl italic mb-6 text-gray-700 dark:text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.2 }
                }
              }}
            >
              "{testimonial.quote}"
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.3 }
                }
              }}
            >
              <p className="font-semibold text-gray-900 dark:text-white">
                — {testimonial.author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}