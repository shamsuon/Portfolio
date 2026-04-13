import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, MousePointer2 } from 'lucide-react';

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

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Software Engineering Student',
    'AI & Automation Enthusiast',
    'Problem Solver',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
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
      <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-watermark">
          SHAMSUON
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.span variants={child} className="hero-greeting">Hi, I'm</motion.span>
          <div className="hero-name-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8em' }}>
            <h1 className="hero-name" style={{ display: 'flex' }}>
              {"Abdulaziz".split("").map((char, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </h1>
            <h1 className="hero-name" style={{ display: 'flex' }}>
              {"Attia".split("").map((char, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </h1>
            <h1 className="hero-name" style={{ display: 'flex' }}>
              <span className="text-gradient" style={{ display: 'flex' }}>
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
                onClick={() => window.location.href = '#contact'}
              >
                Let's Talk <ArrowRight size={18} />
              </button>
            </motion.div>
            <div className="hero-socials">
              <motion.div variants={child}>
                <a 
                  href="https://github.com/shamsuon" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-github"
                  style={{ scale: 1.3 }}
                >
                  <Github size={28} />
                </a>
              </motion.div>
              <motion.div variants={child}>
                <a 
                  href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-linkedin"
                  style={{ scale: 1.3 }}
                >
                  <Linkedin size={28} />
                </a>
              </motion.div>
              <motion.div variants={child}>
                <a 
                  href="https://x.com/AbdulazizA59247" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-icon-link neon-icon neon-x"
                  style={{ scale: 1.3 }}
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
