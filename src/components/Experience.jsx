import { motion } from 'framer-motion';
import { Smartphone, Sparkles, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const roleIcons = [
    <Smartphone key="e1" className="text-cyan-400" size={24} />,
    <Sparkles key="e2" className="text-violet-400" size={24} />,
    <Code2 key="e3" className="text-emerald-400" size={24} />
  ];

  return (
    <section className="section-container" id="experience">
      <div className="section-header">
        <span className="section-label">{t.journey.label}</span>
        <h2 className="section-title">{t.journey.title}</h2>
        <p className="section-subtitle">{t.journey.subtitle}</p>
      </div>

      <div className="experience-timeline-grid">
        {t.journey.items.map((exp, idx) => (
          <motion.div 
            key={exp.role}
            className="experience-card glass premium-hover"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="exp-card-header">
              <div className="exp-icon-box">
                {roleIcons[idx]}
              </div>
              <div className="exp-meta">
                <span className="exp-period-pill">{exp.period}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-focus">{exp.focus}</span>
              </div>
            </div>

            <ul className="exp-points-list">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="exp-point-item">
                  <div className="exp-point-bullet" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
