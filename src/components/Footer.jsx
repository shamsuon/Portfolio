import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isAr } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-letters">AS</span>
            <span className="brand-full">
              {isAr ? 'عبدالعزيز عطية شمس' : 'Abdulaziz Attia Shams'}
            </span>
            <span className="joyboy-footer-badge joyboy-handwritten">joyboy.dev</span>
          </div>
          <p className="footer-tagline">
            {t.footer.tagline}
          </p>
        </div>

        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Abdulaziz Attia Shams (joyboy.dev). {t.footer.rights}</p>
          <p className="footer-built-with">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
