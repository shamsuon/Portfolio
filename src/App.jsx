import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import StarBackground from './components/StarBackground';

function App() {
  useLayoutEffect(() => {
    // Force scroll to top on every load/refresh
    window.history.scrollRestoration = 'manual';
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }, []);

  useEffect(() => {
    const detectDeviceTier = () => {
      const ua = (navigator.userAgent || '').toLowerCase();
      const mobileUA =
        navigator.userAgentData?.mobile === true ||
        /(iphone|ipod|android.*mobile|windows phone|blackberry|mobile)/.test(ua);
      const tabletUA =
        /(ipad|tablet|android(?!.*mobile)|kindle|silk|playbook)/.test(ua);
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const touchCapable = coarsePointer || navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
      const width = window.innerWidth;

      if (mobileUA) return 'mobile';
      if (tabletUA) return 'tablet';
      if (touchCapable && width <= 767) return 'mobile';
      if (touchCapable && width <= 1100) return 'tablet';
      return 'desktop';
    };

    const applyDeviceClass = () => {
      const tier = detectDeviceTier();
      document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
      document.body.classList.add(`device-${tier}`);
      document.body.dataset.deviceTier = tier;
    };

    applyDeviceClass();
    window.addEventListener('resize', applyDeviceClass);
    window.addEventListener('orientationchange', applyDeviceClass);

    return () => {
      window.removeEventListener('resize', applyDeviceClass);
      window.removeEventListener('orientationchange', applyDeviceClass);
    };
  }, []);

  return (
    <div className="app">
      <Background />
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

