import { motion } from 'framer-motion';
import { fadeUp, staggerItem, viewport } from '../hooks/useScrollAnimation';
import { getContactInfo } from '../utils/security';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail 
} from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
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

const WhatsAppIcon = ({ size = 24, className = "" }) => (
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

const TelegramIcon = ({ size = 24, className = "" }) => (
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

const Contact = () => {
  const { email, phone } = getContactInfo();

  const socials = [
    { 
      name: 'WhatsApp', 
      username: 'Chat with me',
      icon: <WhatsAppIcon />, 
      url: `https://wa.me/${phone}`,
      neonClass: 'neon-whatsapp'
    },
    { 
      name: 'Telegram', 
      username: 'Message me',
      icon: <TelegramIcon />, 
      url: `https://t.me/+${phone}`,
      neonClass: 'neon-telegram'
    },
    { 
      name: 'LinkedIn', 
      username: 'Abdulaziz Attia',
      icon: <Linkedin />, 
      url: 'https://www.linkedin.com/in/abdulaziz-attia-abdulaziz-86a814321?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      neonClass: 'neon-linkedin'
    },
    { 
      name: 'GitHub', 
      username: 'shamsuon',
      icon: <Github />, 
      url: 'https://github.com/shamsuon',
      neonClass: 'neon-github'
    },
    { 
      name: 'X', 
      username: 'AbdulazizA59247',
      icon: <XIcon />, 
      url: 'https://x.com/AbdulazizA59247',
      neonClass: 'neon-x'
    },
    { 
      name: 'YouTube', 
      username: 'AI Code Lab',
      icon: <Youtube />, 
      url: 'https://youtube.com/@aicodeinglab?si=_Z22cEdYrckp6jcB',
      neonClass: 'neon-youtube'
    },
    { 
      name: 'TikTok', 
      username: 'shamsuon',
      icon: <TikTokIcon />, 
      url: 'https://www.tiktok.com/@shamsuon?_r=1&_t=ZS-95TsuurvCI1',
      neonClass: 'neon-tiktok'
    },
    { 
      name: 'Instagram', 
      username: '3bdu_sh2ms',
      icon: <Instagram />, 
      url: 'https://www.instagram.com/3bdu_sh2ms?igsh=Y2c1eXdkdGRxeDBk',
      neonClass: 'neon-instagram'
    },
    { 
      name: 'Facebook', 
      username: 'Abdulaziz Attia',
      icon: <Facebook />, 
      url: 'https://www.facebook.com/share/18agXWQhMx/',
      neonClass: 'neon-facebook'
    }
  ];


  return (
    <section className="section-container" id="contact">
      <motion.div 
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="section-label">05. Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <div className="contact-wrapper">
        <motion.div 
          className="contact-info glass"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3>Let&apos;s build something extraordinary.</h3>
          <p>Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <motion.div variants={fadeUp}>
          <a href={`mailto:${email}`} className="contact-email-card glass neon-azure">
            <div className="email-icon-box">
              <Mail size={32} />
            </div>
            <div className="email-details">
              <span>Email Me</span>
              <strong>{email}</strong>
            </div>
          </a>
        </motion.div>
      </motion.div>

        <div className="social-cards-container">
          {socials.map((social, idx) => (
            <motion.div 
              key={social.name}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerItem}
              transition={{ delay: idx * 0.08 }}
            >
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link-card glass ${social.neonClass}`}
              >
                <div className="social-card-icon">
                  {social.icon}
                </div>
                <div className="social-card-info">
                  <span className="platform-name">{social.name}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
