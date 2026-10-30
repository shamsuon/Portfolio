import { useState } from 'react';
import { motion } from 'framer-motion';
import { getContactInfo } from '../utils/security';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TikTokIcon = ({ size = 22, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.414 0 .004 5.411.001 12.045a11.871 11.871 0 0 0 1.592 5.953L0 24l6.096-1.6a11.82 11.82 0 0 0 5.945 1.592h.005c6.632 0 12.042-5.411 12.045-12.047a11.816 11.816 0 0 0-3.629-8.418z" />
  </svg>
);

const TelegramIcon = ({ size = 22, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

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

const Contact = () => {
  const { t, isAr } = useLanguage();
  const { email, phone, username } = getContactInfo();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { 
      name: 'WhatsApp', 
      label: `@${username}`,
      icon: <WhatsAppIcon />, 
      url: `https://wa.me/${phone}?text=${encodeURIComponent(isAr ? 'مرحباً م/ عبدالعزيز' : 'Hello Eng. Abdulaziz')}`,
      badgeColor: '#25D366'
    },
    { 
      name: 'Telegram', 
      label: `@${username}`,
      icon: <TelegramIcon />, 
      url: `https://t.me/${username}`,
      badgeColor: '#0088cc'
    },
    { 
      name: 'LinkedIn', 
      label: isAr ? 'الملف المهني' : 'Professional Profile',
      icon: <Linkedin size={22} />, 
      url: 'https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321',
      badgeColor: '#0a66c2'
    },
    { 
      name: 'GitHub', 
      label: isAr ? 'مستودعات الأكواد' : 'Code Repositories',
      icon: <Github size={22} />, 
      url: 'https://github.com/shamsuon',
      badgeColor: '#f0f6fc'
    },
    { 
      name: 'X (Twitter)', 
      label: isAr ? 'تحديثات وآراء' : 'Updates & Thoughts',
      icon: <XIcon size={20} />, 
      url: 'https://x.com/AbdulazizA59247',
      badgeColor: '#ffffff'
    },
    { 
      name: 'YouTube', 
      label: 'AI Code Lab',
      icon: <Youtube size={22} />, 
      url: 'https://youtube.com/@aicodeinglab?si=_Z22cEdYrckp6jcB',
      badgeColor: '#ff0000'
    },
    { 
      name: 'TikTok', 
      label: '@shamsuon',
      icon: <TikTokIcon size={22} />, 
      url: 'https://www.tiktok.com/@shamsuon?_r=1&_t=ZS-95TsuurvCI1',
      badgeColor: '#ff0050'
    },
    { 
      name: 'Instagram', 
      label: '@3bdu_sh2ms',
      icon: <Instagram size={22} />, 
      url: 'https://www.instagram.com/3bdu_sh2ms?igsh=Y2c1eXdkdGRxeDBk',
      badgeColor: '#e4405f'
    },
    { 
      name: 'Facebook', 
      label: 'Abdulaziz Attia',
      icon: <Facebook size={22} />, 
      url: 'https://www.facebook.com/share/18agXWQhMx/',
      badgeColor: '#1877f2'
    }
  ];

  return (
    <section className="section-container" id="contact">
      <div className="section-header">
        <span className="section-label">{t.contact.label}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-modern-container">
        {/* Main CTA Card */}
        <div className="contact-hero-banner glass">
          <div className="banner-content">
            <div className="banner-badge">
              <Sparkles size={14} className="text-cyan-400" />
              <span>{t.contact.bannerBadge}</span>
            </div>
            <h3 className="banner-heading">{t.contact.bannerHeading}</h3>
            <p className="banner-subtext">{t.contact.bannerSubtext}</p>

            <div className="banner-actions">
              <a 
                href={`mailto:${email}`} 
                className="btn btn-hero-primary"
              >
                <Mail size={18} />
                <span>{t.contact.btnEmail}</span>
              </a>

              <button 
                onClick={handleCopyEmail}
                className="btn btn-hero-secondary copy-email-btn"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span>{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>{t.contact.btnCopy}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="contact-social-grid">
          {socials.map((social, idx) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-channel-card glass premium-hover"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.04 }}
              style={{ '--brand-accent': social.badgeColor }}
            >
              <div className="social-icon-box">
                {social.icon}
              </div>
              <div className="social-info-wrap">
                <span className="social-title">{social.name}</span>
                <span className="social-handle">{social.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
