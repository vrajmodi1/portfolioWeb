import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Vraj Modi, back to top">VM<i>.</i></a>
      <nav aria-label="Primary">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#education">Recognition</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a className="pill" href="#contact">Let's talk</a>
    </header>
  );
};

export default Navbar;
