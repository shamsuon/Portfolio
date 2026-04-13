const getDeviceTier = () => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false };
  }

  const bodyTier = document.body?.dataset?.deviceTier;
  if (bodyTier === 'mobile') return { isMobile: true, isTablet: false };
  if (bodyTier === 'tablet') return { isMobile: false, isTablet: true };

  const ua = (navigator.userAgent || '').toLowerCase();
  const mobileUA =
    navigator.userAgentData?.mobile === true ||
    /(iphone|ipod|android.*mobile|windows phone|blackberry|mobile)/.test(ua);
  const tabletUA = /(ipad|tablet|android(?!.*mobile)|kindle|silk|playbook)/.test(ua);
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const touchCapable = coarsePointer || navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const width = window.innerWidth;

  if (mobileUA) {
    return { isMobile: true, isTablet: false };
  }

  if (tabletUA) {
    return { isMobile: false, isTablet: true };
  }

  if (touchCapable && width <= 767) {
    return { isMobile: true, isTablet: false };
  }

  if (touchCapable && width <= 1100) {
    return { isMobile: false, isTablet: true };
  }

  const isMobile = width <= 767;
  const isTablet = width > 767 && width <= 1024;

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

