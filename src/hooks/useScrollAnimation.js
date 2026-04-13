const getDeviceTier = () => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false };
  }

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;

  return { isMobile, isTablet };
};

const device = getDeviceTier();

const smoothTransition = device.isMobile
  ? { duration: 0.58, ease: [0.2, 0.65, 0.3, 1] }
  : device.isTablet
    ? { duration: 0.72, ease: [0.2, 0.8, 0.25, 1] }
    : { duration: 0.92, ease: [0.16, 1, 0.3, 1] };

const yOffset = device.isMobile ? 26 : device.isTablet ? 38 : 80;
const xOffsetL = device.isMobile ? -20 : device.isTablet ? -32 : -65;
const xOffsetR = device.isMobile ? 20 : device.isTablet ? 32 : 65;

export const fadeUp = {
  hidden:  { opacity: 0, y: yOffset },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
};

export const fadeRight = {
  hidden:  { opacity: 0, x: xOffsetL },
  visible: { opacity: 1, x: 0, transition: smoothTransition }
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: xOffsetR },
  visible: { opacity: 1, x: 0, transition: smoothTransition }
};

export const scaleUp = {
  hidden:  { opacity: 0, scale: device.isMobile ? 0.96 : device.isTablet ? 0.93 : 0.9 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition }
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: device.isMobile ? 0.07 : device.isTablet ? 0.09 : 0.12,
      delayChildren: device.isMobile ? 0.05 : 0.08
    }
  }
};

export const staggerItem = {
  hidden:  { opacity: 0, y: yOffset },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
};

// Replays while scrolling down and up.
export const viewport = {
  once: false,
  amount: device.isMobile ? 0.2 : device.isTablet ? 0.16 : 0.12,
  margin: device.isMobile ? '0px 0px -8% 0px' : '0px 0px -12% 0px'
};

