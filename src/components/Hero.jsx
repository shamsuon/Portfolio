import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Sparkles, 
  Smartphone, 
  Cpu, 
  Code2, 
  Zap
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';
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

const FlutterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.314 0L2.3 12L6 15.7L21.684.013h-7.37zM21.684 11.03h-7.37l-3.7 3.7l3.7 3.7l7.37-7.4zM14.314 24h7.37l-7.37-7.37l-3.7 3.7L14.314 24z"/>
  </svg>
);

const Hero = () => {
  const { t, isAr } = useLanguage();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const phrases = t.hero.phrases;

  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setLoopNum(0);
  }, [isAr]);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting 
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2400);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(120);
      }

      setTypingSpeed(isDeleting ? 60 : 120);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const handleScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="home">
      {/* Ambient Large joyboy.dev Watermark in background */}
      <div className="hero-joyboy-ambient-watermark joyboy-handwritten" aria-hidden="true">
        joyboy.dev
      </div>

      <div className="hero-container">
        {/* Text Content */}
        <motion.div 
          className="hero-text-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="status-pill-badge">
            <span className="status-dot">
              <span className="status-dot-pulse" />
            </span>
            <span>{t.hero.statusBadge}</span>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="hero-greeting-box">
            <span className="hero-greeting">{t.hero.greeting}</span>
          </motion.div>

          {/* Soft Font Name Heading */}
          <motion.h1 variants={itemVariants} className="hero-name-heading soft-name-font">
            {t.hero.nameFirst}{' '}
            <span className="hero-name-gradient">{t.hero.nameLast}</span>
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.div variants={itemVariants} className="hero-typing-box">
            <span className="typing-prefix">&gt; </span>
            <span className="hero-dynamic-text">{text}</span>
            <span className="typing-cursor">|</span>
          </motion.div>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="hero-bio-desc">
            {t.hero.bio}
          </motion.p>

          {/* Tech Highlight Pills */}
          <motion.div variants={itemVariants} className="hero-tech-highlights">
            <div className="highlight-pill">
              <FlutterIcon size={16} />
              <span>{t.hero.highlights[0].label}</span>
            </div>
            <div className="highlight-pill">
              <Sparkles size={16} className="text-cyan-400" />
              <span>{t.hero.highlights[1].label}</span>
            </div>
            <div className="highlight-pill">
              <Smartphone size={16} className="text-violet-400" />
              <span>{t.hero.highlights[2].label}</span>
            </div>
            <div className="highlight-pill">
              <Zap size={16} className="text-amber-400" />
              <span>{t.hero.highlights[3].label}</span>
            </div>
          </motion.div>

          {/* Action Buttons & Socials */}
          <motion.div variants={itemVariants} className="hero-actions-row">
            <button 
              className="btn btn-hero-primary"
              onClick={() => handleScrollTo('#contact')}
            >
              <span>{t.hero.btnContact}</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>

            <button 
              className="btn btn-hero-secondary"
              onClick={() => handleScrollTo('#projects')}
            >
              <span>{t.hero.btnProjects}</span>
            </button>

            <div className="hero-social-divider" />

            <div className="hero-social-links">
              <a 
                href="https://github.com/shamsuon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-btn"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-btn"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/AbdulazizA59247" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-btn"
                title="X (Twitter)"
              >
                <XIcon size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Hero Centerpiece: Circular Avatar with Floating Badges */}
        <div className="hero-visual-wrapper">
          {/* Circular Ambient Glow & Rings */}
          <div className="hero-photo-ambient-glow" />
          <div className="hero-circular-ring" />

          {/* Circular Avatar Container */}
          <div className="hero-circular-avatar-frame">
            <img 
              src={profileImg} 
              alt="Abdulaziz Attia Shams (joyboy.dev)" 
              className="hero-circular-img"
            />
            <div className="hero-avatar-overlay-gradient" />
          </div>

          {/* joyboy.dev Handwritten Signature Badge Under Circular Avatar */}
          <div className="hero-joyboy-signature-pill joyboy-handwritten">
            ~ joyboy.dev ~
          </div>

          {/* Floating Dev Badges with GPU-accelerated CSS Animations */}
          {/* 1. Flutter & Dart Badge (Top-Left) */}
          <div className="floating-badge badge-pos-tl css-float-1">
            <div className="badge-icon-wrap icon-flutter">
              <FlutterIcon size={22} />
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">{t.hero.badgeFlutter}</span>
              <span className="badge-sub">{t.hero.badgeFlutterSub}</span>
            </div>
          </div>

          {/* 2. AI Integration Badge (Top-Right) */}
          <div className="floating-badge badge-pos-tr css-float-2">
            <div className="badge-icon-wrap icon-ai">
              <Sparkles size={20} />
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">{t.hero.badgeAI}</span>
              <span className="badge-sub">{t.hero.badgeAISub}</span>
            </div>
          </div>

          {/* 3. Mobile Native UX (Bottom-Left) */}
          <div className="floating-badge badge-pos-bl css-float-3">
            <div className="badge-icon-wrap icon-mobile">
              <Smartphone size={20} />
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">{t.hero.badgeMobile}</span>
              <span className="badge-sub">{t.hero.badgeMobileSub}</span>
            </div>
          </div>

          {/* 4. Smart Automation / Code (Bottom-Right) */}
          <div className="floating-badge badge-pos-br css-float-4">
            <div className="badge-icon-wrap icon-automation">
              <Cpu size={20} />
            </div>
            <div className="badge-text-wrap">
              <span className="badge-title">{t.hero.badgeAutomation}</span>
              <span className="badge-sub">{t.hero.badgeAutomationSub}</span>
            </div>
          </div>

          {/* 5. Mini Code Tag Floating Near Top */}
          <div className="floating-mini-code css-float-5">
            <Code2 size={14} className="code-tag-icon" />
            <code>{`const dev = 'joyboy.dev';`}</code>
          </div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div 
        className="hero-scroll-indicator"
        onClick={() => handleScrollTo('#about')}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-label">{t.hero.scrollLabel}</span>
      </div>
    </section>
  );
};

export default Hero;
