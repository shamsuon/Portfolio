import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
                <motion.span 
                  className="nav-star-dot"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
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
          
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass">
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
      )}
    </motion.nav>
  );
};

export default Navbar;
