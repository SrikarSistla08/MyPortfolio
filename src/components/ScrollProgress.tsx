import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min((scrolled / documentHeight) * 100, 100);
      setScrollProgress(progress);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledUpdateScrollProgress = (): void => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledUpdateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', throttledUpdateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-blue-500 dark:bg-blue-400 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
};

export default ScrollProgress; 