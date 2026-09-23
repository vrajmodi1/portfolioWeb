import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Vraj Modi, back to top">
        <img src="/favicon.svg" alt="VM Logo" style={{ height: '36px', width: 'auto', display: 'block' }} />
      </a>
      <nav aria-label="Primary">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#education">Recognition</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a className="pill" href="/Vraj_Modi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="pill" href="#contact">Let's talk</a>
      </div>
    </header>
  );
};

export default Navbar;
