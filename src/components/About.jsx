import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Sparkles, 
  Cpu, 
  CheckCircle,
  Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const pillarIcons = [
    <Smartphone key="p1" className="pillar-icon text-cyan-400" size={26} />,
    <Sparkles key="p2" className="pillar-icon text-violet-400" size={26} />,
    <Cpu key="p3" className="pillar-icon text-emerald-400" size={26} />
  ];

  return (
    <section className="section-container" id="about">
      <div className="section-header">
        <span className="section-label">{t.about.label}</span>
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
      </div>

      <div className="about-modern-grid">
        {/* Left Side: Story & Narrative */}
        <div className="about-story-card glass">
          <div className="card-badge-glow">
            <Zap size={14} />
            <span>{t.about.badge}</span>
          </div>

          <h3 className="about-headline">
            {t.about.headline}
          </h3>

          <p className="about-text">{t.about.p1}</p>
          <p className="about-text">{t.about.p2}</p>
          <p className="about-text">{t.about.p3}</p>

          {/* Key Checklist */}
          <div className="about-checklist">
            {t.about.highlights.map((item, idx) => (
              <div key={idx} className="checklist-item">
                <CheckCircle size={17} className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Quick Metrics */}
          <div className="about-stats-strip">
            <div className="stat-box">
              <span className="stat-num text-gradient">4.0</span>
              <span className="stat-desc">{t.about.stats.focus}</span>
            </div>
            <div className="stat-box">
              <span className="stat-num text-gradient">10+</span>
              <span className="stat-desc">{t.about.stats.projects}</span>
            </div>
            <div className="stat-box">
              <span className="stat-num text-gradient">100%</span>
              <span className="stat-desc">{t.about.stats.specialization}</span>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Feature Pillars */}
        <div className="about-pillars-column">
          {t.about.pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.title}
              className="about-pillar-card glass premium-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="pillar-header">
                <div className="pillar-icon-wrapper">
                  {pillarIcons[idx]}
                </div>
                <div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <span className="pillar-tagline">{pillar.tagline}</span>
                </div>
              </div>
              <p className="pillar-description">{pillar.desc}</p>
            </motion.div>
          ))}

          {/* Code Philosophy Box */}
          <div className="about-code-snippet-box glass">
            <div className="code-snippet-header">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
              </div>
              <span className="code-filename joyboy-handwritten" style={{ fontSize: '1rem', color: '#38bdf8' }}>
                joyboy.dev // clean_architecture.dart
              </span>
            </div>
            <pre className="code-snippet-body">
              <code>{`class DeveloperProfile {
  final String alias = 'joyboy.dev';
  final String track = 'Mobile App Development (Flutter)';
  final String superpower = 'AI Integration & Automation';
  
  void buildExperience() => deliverSmooth60FpsApps();
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
