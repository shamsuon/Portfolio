import { motion } from 'framer-motion';
import { fadeUp, staggerItem, viewport } from '../hooks/useScrollAnimation';
import { 
  Code2, 
  Database, 
  GitBranch, 
} from 'lucide-react';


// --- Official Brand SVG Components ---
const PythonIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.97 0C5.29 0 5.62 2.88 5.62 2.88l.01 3L12 5.88V4.41h5.88V12c0 2.22-1.89 2.12-2.12 2.12H5.88V6.12H1.35S0 6.12 0 12.12s1.35 6 1.35 6h2.24v-3l6.41.01V16.6H4.12v7.5s0 2.88 6.7 2.88 6.71-2.88 6.71-2.88v-3l-.01-5.77s.11-6.13-5.55-6.13z"/>
  </svg>
);

const CPlusPlusIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.101 11.536h-3.792v-3.024h-2.304v3.024H12.98v2.112h3.024v3.024h2.304v-3.024h3.793v-2.112zm-8.818 5.485c-.972.84-2.226 1.259-3.762 1.259-2.25 0-3.996-.863-5.238-2.589C3.041 12.44 3.041 9.56 4.283 6.32c1.242-1.726 2.988-2.589 5.238-2.589 1.536 0 2.79.423 3.762 1.269l1.623-1.623C13.296 1.769 11.454 1 9.521 1 5.925 1 3.12 2.373 1.104 5.119-.912 7.865-.912 12.135 1.104 14.881 3.12 17.627 5.925 19 9.521 19c1.933 0 3.775-.769 5.385-2.307l-1.623-1.672z"/>
  </svg>
);

const CIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.936 17.021c-.972.84-2.226 1.259-3.762 1.259-2.25 0-3.996-.863-5.238-2.589-1.242-3.251-1.242-6.131 0-9.371 1.242-1.726 2.988-2.589 5.238-2.589 1.536 0 2.79.423 3.762 1.269l1.623-1.623C13.111 1.769 11.269 1 9.336 1 5.74 1 2.935 2.373.919 5.119c-2.016 2.746-2.016 7.016 0 9.762 2.016 2.746 4.821 4.119 8.417 4.119 1.933 0 3.775-.769 5.385-2.307l-1.623-1.672z"/>
  </svg>
);

const JavaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.35 15.68c-.17.06-.35.12-.52.17a12.68 12.68 0 0 1-5.63.13l.03-.09c1.69.49 5.09.68 5.86.6.76-.07 1.25-.23 1.25-.46s-.41-.39-1.33-.51c-1.04-.13-3.07-.12-4.14-.36 1.15.03 2.3.01 3.44-.09l1.9-.27c.61-.15.96-.36.96-.68s-.35-.53-.94-.68c-1.14-.09-2.28-.12-3.41-.08l-.2.13c-.02.43.08.79.28 1.15.2.36.48.65.8.84.32.19.74.32 1.25.39.51.07 1.16.08 1.95.06l.49-.04zM16.14 14.15l-3.32-.4c-.6-.07-1.18-.11-1.74-.13a1.43 1.43 0 0 0-1.42 1.1c.14-.38.4-.73.74-1.03.34-.3.73-.55 1.17-.74.44-.19.92-.32 1.43-.39s1.04-.08 1.58-.02l3.32.4c.54.06 1.05.15 1.53.28s.84.28 1.1.48.43.43.43.68c0 .25-.17.48-.43.68l-3.32-.4c-.54-.06-1.05-.15-1.53-.28s-.84-.28-1.1-.48l-.4-.44z"/>
  </svg>
);

const FlutterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.314 0L2.3 12L6 15.7L21.684.013h-7.37zM21.684 11.03h-7.37l-3.7 3.7l3.7 3.7l7.37-7.4zM14.314 24h7.37l-7.37-7.37l-3.7 3.7L14.314 24z"/>
  </svg>
);

const DartIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.105 4.105S.158 8.155.158 8.155c-.21.21-.21.573 0 .783l4.249 4.249 10.304-10.304-4.249-4.249c-.21-.21-.573-.21-.783 0L4.105 4.105zM23.842 8.547l-9.396 9.396-4.249-4.249c-.21-.21-.573-.21-.783 0L5.166 18l14.075 14.075c.21.21.573.21.783 0l4.249-4.249c.21-.21.21-.573 0-.783l-9.396-9.396 9.396-9.396c.21-.21.21-.573 0-.783l-4.249-4.249c-.21-.21-.573-.21-.783 0z"/>
  </svg>
);

const MySQLIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.002 24c-2.88 0-5.6-.48-7.84-1.28l.24-1.2h.48c2.16.8 4.72 1.28 7.36 1.28 6.4 0 11.6-2.48 11.6-5.6s-5.2-5.6-11.6-5.6-11.6 2.48-11.6 5.6c0 1.28.88 2.4 2.48 3.28l-.32 1.2c-1.92-.96-3.2-2.32-3.2-4.08 0-3.6 5.6-6.8 12.64-6.8s12.64 3.2 12.64 6.8S19.042 24 12.002 24z"/>
  </svg>
);

const SQLiteIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.546 9.05l-6-6c-.59-.59-1.54-.59-2.12 0l-12 12c-.59.59-.59 1.54 0 2.12l6 6c.59.59 1.54.59 2.12 0l12-12c.59-.59.59-1.54 0-2.12zM12 21.17l-5.17-5.17L12 10.83l5.17 5.17L12 21.17zm5.17-10.34L12 5.66l5.17 5.17z"/>
  </svg>
);

const GitIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.546 10.93L13.067.452a1.503 1.503 0 0 0-2.126 0L8.75 2.641l1.74 1.74a1.507 1.507 0 0 1 2.126 2.126l1.603 1.603a1.503 1.503 0 0 1 2.106 2.131l-1.61 1.61a1.503 1.503 0 0 1-2.131-2.106L10.981 8.14V4.524L2.641 12.86a1.503 1.503 0 0 0 0 2.126l10.479 10.479a1.503 1.503 0 0 0 2.126 0l10.296-10.296c.59-.59.59-1.547 0-2.24z"/>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const N8NIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5V11L9.5 16.5H8V7.5h1.5V13L12 7.5h1.5v9h-1.5z"/>
  </svg>
);



const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-violet-400" />,
      skills: [
        { name: 'Python', icon: <PythonIcon /> },
        { name: 'C++', icon: <CPlusPlusIcon /> },
        { name: 'C', icon: <CIcon /> },
        { name: 'Java', icon: <JavaIcon /> },
        { name: 'Dart', icon: <DartIcon /> }
      ]
    },
    {
      title: 'Frameworks & DB',
      icon: <Database className="text-cyan-400" />,
      skills: [
        { name: 'Flutter', icon: <FlutterIcon /> },
        { name: 'MySQL', icon: <MySQLIcon /> },
        { name: 'SQLite', icon: <SQLiteIcon /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <GitBranch className="text-pink-400" />,
      skills: [
        { name: 'Git', icon: <GitIcon /> },
        { name: 'GitHub', icon: <GithubIcon /> },
        { name: 'n8n Automation', icon: <N8NIcon /> }
      ]
    }
  ];

  return (
    <section className="section-container" id="skills">
      <motion.div 
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="section-label">02. Expertise</span>
        <h2 className="section-title">My Tech Stack</h2>
      </motion.div>

      <div className="skills-grid"> 
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.title}
            className="skill-card glass premium-hover"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerItem}
            transition={{ delay: idx * 0.1 }}
          >

            <div className="skill-card-bg" />
            <div className="skill-card-inner">
              <div className="skill-card-header">
                <div className="skill-icon-box">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <motion.li 
                    key={skill.name} 
                    className="skill-item tech-tag"
                  >
                    <span className="tech-icon-small" style={{ display: 'inline-block' }}>{skill.icon}</span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
              <div className="scanline"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
