import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Abdulaziz Attia Shams. All rights reserved.</p>
        <p style={{ marginTop: '8px', opacity: 0.5, fontSize: '0.8rem' }}>Built with React & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
