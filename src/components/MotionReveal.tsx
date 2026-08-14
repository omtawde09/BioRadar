import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// 1. Smooth Vertical Rise-Up Animation (Framer template style)
export const RiseUp: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  duration = 0.65,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 2. Pop-Up Spring Animation (Scale + Rise)
export const PopUp: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.3, 0.64, 1] // Bouncy spring feel
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 3. Directional Slide-In with Scale Pop
interface SlideInProps extends MotionRevealProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.65,
  className = '',
  ...props
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -45, scale: 0.92 };
      case 'right':
        return { opacity: 0, x: 45, scale: 0.92 };
      case 'up':
        return { opacity: 0, y: 45, scale: 0.92 };
      case 'down':
        return { opacity: 0, y: -45, scale: 0.92 };
      default:
        return { opacity: 0, x: -45, scale: 0.92 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 4. Stagger Cascading Container
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 5. Stagger Child Item (Pops & Rises up within StaggerContainer)
export const StaggerItem: React.FC<MotionRevealProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32, scale: 0.92 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
