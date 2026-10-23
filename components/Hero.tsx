import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="bg-watermark">CREATIVE</div>
        <div className="hero-divider fade-in">
          <span className="mono">01 // CREATIVE</span>
        </div>
        <div className="hero-content-left">
          <div className="meta-l">
            <span className="mono">PORTFOLIO / 2026</span>
            <span className="mono">AHMEDABAD, IN</span>
          </div>

          <div className="main-title-wrap">
            <h1 className="main-title" aria-label="Vraj Modi">
              <span className="text-white">VRAJ</span>
              <span className="text-gradient">MODI</span>
            </h1>
          </div>

          <div className="intro fade-in">
            <div className="lab"><span className="mono">001 — INTRO</span></div>
            <p>
              <strong style={{ color: '#fff', fontWeight: 600 }}>Creative Developer &bull; Full-Stack Developer</strong> &bull; building
              premium digital experiences and scalable software
              for the next generation of products.
            </p>
            <div className="row">
              <a href="#work" className="pill" style={{ textTransform: 'uppercase' }}>VIEW WORK <span aria-hidden="true">↘</span></a>
              <a href="#contact" className="pill solid" style={{ textTransform: 'uppercase' }}>CONTACT <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>

        <div className="hero-content-right">
          <figure className="hero-cutout-wrapper fade-in">
            <div className="ambient-glow"></div>
            <div className="orbit-line"></div>
            <img src="/MyPic.png" alt="Vraj Modi" className="hero-cutout-img" />
            <div className="floating-text">
              <span className="mono"><i className="dot-live"></i>AVAILABLE FOR WORK</span>
              <span className="mono" style={{ color: 'var(--faint)' }}>B.E. COMPUTER SCIENCE &bull; 2028</span>
            </div>
          </figure>
        </div>
        
        <div className="scroll-indicator fade-in">
          <span className="mono">Scroll to explore</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>

        <svg className="star fade-in" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/>
        </svg>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          <span>Front-end Development</span>
          <span>Creative Coding</span>
          <span>UI/UX Design</span>
          <span>Web Animations</span>
          <span>Front-end Development</span>
          <span>Creative Coding</span>
          <span>UI/UX Design</span>
          <span>Web Animations</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
