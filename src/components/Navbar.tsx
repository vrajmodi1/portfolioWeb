import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Vraj Modi, back to top" style={{ textDecoration: 'none' }}>
        <span style={{ fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>VM.</span>
      </a>
      <nav aria-label="Primary">
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#education">RECOGNITION</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a className="pill solid" style={{ textTransform: 'uppercase' }} href="#contact">LET'S TALK</a>
      </div>
    </header>
  );
};

export default Navbar;
