import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const XIcon = ({ size = 24, className = "" }) => (
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    typeof window !== 'undefined' ? window.scrollY > 70 : false
  );
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        if (!prev && window.scrollY > 70) return true;
        if (prev && window.scrollY < 30) return false;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
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

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 50; // 50px offset for navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds - Slow cinematic scroll!
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const t = Math.min(progress / duration, 1);
      // Ease In Out Cubic
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.85, 0.25, 1] }}
    >
      <div className="navbar-stars">
        <div className="nav-star"></div>
        <div className="nav-star"></div>
        <div className="nav-star"></div>
      </div>

      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="text-gradient">AS</span>.Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a 
                href={link.href} 
                className="nav-link"
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                {link.name}
                <span className="nav-star-dot" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="https://github.com/shamsuon" target="_blank" rel="noopener noreferrer" className="nav-icon-link neon-icon neon-github">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="nav-icon-link neon-icon neon-linkedin">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/AbdulazizA59247" target="_blank" rel="noopener noreferrer" className="nav-icon-link neon-icon neon-x">
            <XIcon size={24} />
          </a>
          
          <button ref={menuButtonRef} className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
            <motion.div
              ref={mobileMenuRef}
              className="mobile-menu glass"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.75 }}
            >
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleScrollTo(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
