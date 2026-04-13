import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { viewport } from '../hooks/useScrollAnimation';

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

const PHRASES = [
  'Software Engineering Student',
  'AI & Automation Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const heroContentRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = PHRASES[loopNum % PHRASES.length];
      const updatedText = isDeleting 
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }

      setTypingSpeed(isDeleting ? 80 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const updateWatermarkPosition = () => {
      if (!heroContentRef.current || !greetingRef.current) return;

      if (window.innerWidth < 769) {
        heroContentRef.current.style.removeProperty('--hero-watermark-top');
        return;
      }

      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      const contentTop = heroContentRef.current.getBoundingClientRect().top;
      const navbarBottom = navbar.getBoundingClientRect().bottom;
      const greetingTop = greetingRef.current.getBoundingClientRect().top;
      const middlePoint = (navbarBottom + greetingTop) / 2;
      const relativeTop = middlePoint - contentTop;

      heroContentRef.current.style.setProperty('--hero-watermark-top', `${relativeTop}px`);
    };

    updateWatermarkPosition();
    window.addEventListener('resize', updateWatermarkPosition);
    window.addEventListener('load', updateWatermarkPosition);
    const rafId = window.requestAnimationFrame(updateWatermarkPosition);

    return () => {
      window.removeEventListener('resize', updateWatermarkPosition);
      window.removeEventListener('load', updateWatermarkPosition);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScrollToContact = () => {
    const targetElement = document.querySelector('#contact');
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1900;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const t = Math.min(progress / duration, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <section className="hero-section section-container" id="home">
      <div ref={heroContentRef} className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-watermark">
          SHAMSUON
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          <motion.span ref={greetingRef} variants={child} className="hero-greeting">Hi, I&apos;m</motion.span>
          <div className="hero-name-container">
            <h1 className="hero-name hero-name-part">
              {"Abdulaziz".split("").map((char, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </h1>
            <h1 className="hero-name hero-name-part">
              {"Attia".split("").map((char, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </h1>
            <h1 className="hero-name hero-name-part">
              <span className="text-gradient hero-name-gradient">
                {"Shams".split("").map((char, index) => (
                  <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          
          <motion.div variants={child} className="typing-container">
            <h2 className="hero-title">{text}</h2>
            <span className="cursor">|</span>
          </motion.div>
          
          <motion.p variants={child} className="hero-tagline">
            Building intelligent solutions and automating the future through innovative software engineering.
          </motion.p>
          
          <div className="hero-btns">
            <motion.div variants={child}>
              <button 
                className="btn btn-primary" 
                onClick={handleScrollToContact}
              >
                Let&apos;s Talk <ArrowRight size={18} />
              </button>
            </motion.div>
            <div className="hero-socials">
              <motion.div variants={child}>
                <a 
                  href="https://github.com/shamsuon" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-github hero-social-icon"

                >
                  <Github size={28} />
                </a>
              </motion.div>
              <motion.div variants={child}>
                <a 
                  href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-linkedin hero-social-icon"

                >
                  <Linkedin size={28} />
                </a>
              </motion.div>
              <motion.div variants={child}>
                <a 
                  href="https://x.com/AbdulazizA59247" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-x hero-social-icon"

                >
                  <XIcon size={28} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse-icon"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
