// Premium, professional animation variants with subtle blur and fluid bezier curves
const smoothTransition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

export const fadeUp = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition
  }
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition
  }
};

// Optimal viewport settings: Trigger efficiently, allow repeat for bidirectional scrolling
export const viewport = { once: false, amount: 0.1 };
