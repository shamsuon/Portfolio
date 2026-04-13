import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeRight, scaleUp, viewport } from '../hooks/useScrollAnimation';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="section-container" id="about">
      <motion.div 
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="section-label">01. Background</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>
      
      <div className="about-grid">
        <motion.div 
          className="about-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p>
            Hello! I'm <span className="text-white font-bold">Abdulaziz</span>, a passionate Software Engineering student dedicated to bridging the gap between complex problems and elegant digital solutions.
          </p>
          <p>
            My journey in tech is driven by a fascination with <span className="text-gradient font-semibold">AI and Automation</span>. I believe in building software that not only works but also makes an impact in the real world.
          </p>
          <p>
            Currently, I'm focusing on strengthening my foundations while exploring the cutting edges of machine learning and autonomous systems. I thrive in challenging environments where I can apply my problem-solving skills to create efficient, scalable code.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">4.0</span>
              <span className="stat-label">Focus</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-image-container"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="profile-image-container">
            <div className="profile-frame">
              <img src={profileImg} alt="Abdulaziz Attia Shams" className="profile-img" />
            </div>
            {/* Visual glow element behind */}
            <div className="abstract-art" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
               <div className="circle circle-1" style={{ width: '420px', height: '420px' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
