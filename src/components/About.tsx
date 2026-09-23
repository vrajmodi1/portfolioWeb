import React from 'react';

const About: React.FC = () => {
  return (
    <section className="blk about-section" id="about">
      <div className="wrap about">
        
        <div className="about-grid">
          <div className="about-left">
            <div className="sec-lab rv fade-in"><span className="mono">002 — WHO I AM</span></div>
            <h2 className="rv fade-in about-headline">
              Building <span className="text-gradient" style={{display: 'inline'}}>intelligent</span> <span className="text-gradient-alt" style={{display: 'inline'}}>systems</span> that turn ideas into real-world impact.
            </h2>
          </div>
          
          <div className="about-right">
            <p className="rv fade-in">I'm a Computer Science student at New L.J. Institute of Engineering &amp; Technology with a deep focus on full-stack development, modern UI/UX design, and freelance web projects.</p>
            <p className="rv fade-in">I obsess over building products that feel premium — systems that are lightning fast, visually stunning, and quietly solve hard problems in the background.</p>
          </div>
        </div>

        <div className="stats-banner rv fade-in">
          <div className="stat">
            <b>8.92</b>
            <span className="mono">CPI &middot; B.E. CS</span>
          </div>
          <div className="stat">
            <b>2028</b>
            <span className="mono">BATCH YEAR</span>
          </div>
          <div className="stat">
            <b>3+</b>
            <span className="mono">FEATURED PROJECTS</span>
          </div>
          <div className="stat">
            <b>2</b>
            <span className="mono">HACKATHON FINALS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
