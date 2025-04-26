import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useHover } from "@use-gesture/react";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const primaryButtonRef = useRef(null);
  const secondaryButtonRef = useRef(null);

  const bindPrimaryButton = useHover(({ hovering }) => {
    if (hovering) {
      primaryButtonRef.current.style.transform = "translateY(-2px)";
    } else {
      primaryButtonRef.current.style.transform = "translateY(0)";
    }
  });

  const bindSecondaryButton = useHover(({ hovering }) => {
    if (hovering) {
      secondaryButtonRef.current.style.transform = "translateY(-2px)";
    } else {
      secondaryButtonRef.current.style.transform = "translateY(0)";
    }
  });

  // Updated easing values to stay within 0-1 range
  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // Fixed easing
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.9] // Fixed easing
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.9] // Fixed easing
      }
    })
  };

  return (
    <motion.section
      ref={ref}
      className="container mx-auto px-4 py-28 flex flex-col items-center text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div variants={textVariants}>
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
          Your Perfect <span className="text-orange-500">Diet Plan</span>, Tailored Just for You
        </h1>
        <motion.p 
          className="text-xl mt-6 text-gray-600 dark:text-gray-300 max-w-2xl"
          variants={textVariants}
        >
          Tell us your tastes, restrictions, and goals—we'll handle the rest!
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-12 flex gap-6"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.button
          {...bindPrimaryButton()}
          ref={primaryButtonRef}
          className="px-8 py-6 text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 will-change-transform"
          variants={buttonVariants}
          custom={0}
          whileTap={{ scale: 0.98 }}
        >
          Create My Plan
        </motion.button>
        
        <motion.button
          {...bindSecondaryButton()}
          ref={secondaryButtonRef}
          className="px-8 py-6 text-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-50/30 dark:hover:bg-orange-500/10 rounded-xl transition-all duration-300 will-change-transform"
          variants={buttonVariants}
          custom={1}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-20 w-full max-w-5xl h-72 rounded-2xl overflow-hidden"
        variants={gradientVariants}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-10 dark:opacity-5" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;