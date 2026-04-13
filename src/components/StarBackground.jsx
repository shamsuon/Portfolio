import { useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const StarBackground = () => {
  const { scrollY } = useScroll();

  // Create spring-smoothed motion values for mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(normalizedX * 15); // max 15px shift
      mouseY.set(normalizedY * 15);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Fade out stars as we scroll down (fully gone by 800px so it's smooth and unnoticeable)
  const opacity = useTransform(scrollY, [0, 800], [0.7, 0]);

  // Generate 150 stars once
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 5 + 5, // Longer duration for slower drift
      initialScale: Math.random() * 0.5 + 0.5,
      driftX: (Math.random() - 0.5) * 20, // Random drift distance
      driftY: (Math.random() - 0.5) * 20,
    }));
  }, []);

  return (
    <motion.div 
      className="star-background"
      style={{ 
        opacity,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ 
          width: '100%',
          height: '100%',
          position: 'relative',
          x: smoothMouseX,
          y: smoothMouseY
        }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [star.initialScale, star.initialScale * 1.5, star.initialScale],
              x: [0, star.driftX, 0],
              y: [0, star.driftY, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              boxShadow: '0 0 8px #3b82f6, 0 0 16px #2563eb',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StarBackground;
