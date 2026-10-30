import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Globe } from 'lucide-react';
import { LiquidGlass } from 'quick-liquid/react';
import { useLanguage } from '../context/LanguageContext';

const XIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z"/>
  </svg>
);

const Navbar = () => {
  const { t, isAr, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(t.nav.home);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200, opacity: 0 });
  
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const programmaticScrollRef = useRef(false);
  const programmaticTimeoutRef = useRef(null);
  // The "real" active tab from scroll position or click — hover doesn't change this
  const scrollActiveRef = useRef(t.nav.home);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Sync activeTab when language changes
  useEffect(() => {
    scrollActiveRef.current = t.nav.home;
    setActiveTab(t.nav.home);
  }, [t]);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  const handlePointerLeave = () => {
    setMousePos(prev => ({ ...prev, opacity: 0 }));
  };

  const navLinks = useMemo(() => [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.journey, href: '#experience', id: 'experience' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 250);

      setIsOpen(false);
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
      clearTimeout(programmaticTimeoutRef.current);
    };
  }, []);

  // Track active section on scroll ONLY when user physically scrolls the page
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -40% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      // Skip if NOT a real manual scroll, or if this is a programmatic smooth scroll from clicking a tab
      if (!isScrollingRef.current || programmaticScrollRef.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matched = navLinks.find(link => link.id === entry.target.id);
          if (matched) {
            scrollActiveRef.current = matched.name;
            setActiveTab(matched.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (mobileMenuRef.current?.contains(target) || menuButtonRef.current?.contains(target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleScrollTo = (e, targetId, linkName) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Immediate visual feedback — set active tab right away
    if (linkName) {
      scrollActiveRef.current = linkName;
      setActiveTab(linkName);
    }

    // Lock the observer: prevent IntersectionObserver from changing the tab
    // during the smooth scroll animation (which crosses multiple sections)
    programmaticScrollRef.current = true;
    clearTimeout(programmaticTimeoutRef.current);
    programmaticTimeoutRef.current = setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 900); // smooth scroll typically takes ~600-800ms

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 65;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Ambient optical backlight behind the glass to make the SVG refraction immediately visible */}
      <div className="navbar-backdrop-glow" aria-hidden="true" />

      <LiquidGlass
        config={{
          material: 'clear',
          refractionMode: 'svg',
          blur: scrolled ? 7 : 4.5,
          saturation: 1.6,
          refractionStrength: 28,
          bezelWidth: 36,
          thickness: 24,
          ior: 1.52,
          lightAngle: -45,
          chromaticAberration: 0.22,
          borderRadius: 999,
          dynamicLighting: true,
          hoverLighting: true,
          cursorTracking: true,
          edgeHighlight: 0.95,
          specularStrength: 0.42,
          tint: '255, 255, 255',
          tintOpacity: 0.035,
          elevation: 1.2,
        }}
        liquidPress={{ scale: 0.99, squish: 0.015 }}
        className="navbar-container"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Dynamic pointer spotlight glow that tracks the mouse over the glass */}
        <div 
          className="nav-cursor-spotlight"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
            opacity: mousePos.opacity
          }}
          aria-hidden="true"
        />

        {/* Brand Logo & joyboy.dev signature */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => handleScrollTo(e, '#home', t.nav.home)}
        >
          <div className="brand-logo-badge">
            <span className="brand-letters">AS</span>
          </div>
          <div className="brand-text-wrap">
            <div className="brand-title-row">
              <span className="brand-name">
                {isAr ? 'عبدالعزيز شمس' : 'Abdulaziz'}
                <span className="brand-dot">.</span>
              </span>
              <span className="brand-joyboy-tag joyboy-handwritten">joyboy.dev</span>
            </div>
            <span className="brand-role">
              {isAr ? 'مطور موبايل وذكاء اصطناعي' : 'Mobile & AI Dev'}
            </span>
          </div>
        </a>

        {/* Desktop Links Pill (Unified with Navbar Liquid Glass) */}
        <div 
          className="nav-desktop-pill"
          onMouseLeave={() => {
            // When mouse leaves the tabs area, snap back to the real active section
            setActiveTab(scrollActiveRef.current);
          }}
        >
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;

              return (
                <li 
                  key={link.id} 
                  className="nav-item"
                  onMouseEnter={() => {
                    setActiveTab(link.name);
                  }}
                >
                  <a 
                    href={link.href} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleScrollTo(e, link.href, link.name)}
                  >
                    <span className="nav-link-text">{link.name}</span>

                    {/* Single Fluid Water Droplet Indicator: Zero bounce, glides smoothly and stays right at the hovered tab */}
                    {isActive && (
                      <motion.div
                        layoutId="water-droplet-active"
                        className="nav-active-bg water-droplet"
                        transition={{
                          duration: 0.32,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        <span className="water-droplet-sheen" />
                        <span className="water-droplet-caustic" />
                      </motion.div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Language Toggle & Socials */}
        <div className="nav-actions">
          {/* Language Switcher Button */}
          <button 
            onClick={toggleLang}
            className="lang-toggle-btn"
            title={isAr ? 'Switch to English' : 'التحويل للعربية'}
            aria-label="Toggle language"
          >
            <Globe size={16} className="lang-icon" />
            <span className="lang-text">{isAr ? 'English' : 'عربي'}</span>
          </button>

          <div className="nav-social-icons">
            <a 
              href="https://github.com/shamsuon" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-action-icon"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-action-icon"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://x.com/AbdulazizA59247" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-action-icon"
              title="X (Twitter)"
            >
              <XIcon size={16} />
            </a>
          </div>

          <button 
            ref={menuButtonRef} 
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </LiquidGlass>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={mobileMenuRef}
              className="mobile-menu-drawer glass"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mobile-drawer-header">
                <div className="mobile-brand-row">
                  <span className="brand-name">{isAr ? 'عبدالعزيز شمس' : 'Abdulaziz Shams'}</span>
                  <span className="brand-joyboy-tag joyboy-handwritten">joyboy.dev</span>
                </div>
                <button 
                  onClick={toggleLang}
                  className="mobile-lang-btn glass"
                >
                  <Globe size={15} />
                  <span>{isAr ? 'English' : 'عربي'}</span>
                </button>
              </div>

              <div className="mobile-links-list">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`mobile-nav-item ${activeTab === link.name ? 'active' : ''}`}
                    onClick={(e) => handleScrollTo(e, link.href, link.name)}
                  >
                    <span>{link.name}</span>
                    {activeTab === link.name && <div className="mobile-active-dot" />}
                  </a>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <div className="mobile-socials-row">
                  <a href="https://github.com/shamsuon" target="_blank" rel="noopener noreferrer" className="mobile-social-btn">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321" target="_blank" rel="noopener noreferrer" className="mobile-social-btn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/AbdulazizA59247" target="_blank" rel="noopener noreferrer" className="mobile-social-btn">
                    <XIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
