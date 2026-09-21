import React from 'react';

const About: React.FC = () => {
  return (
    <section className="blk" id="about">
      <div className="wrap about">
        <div className="txt">
          <div className="sec-lab rv fade-in"><span className="mono">002 — Who I Am</span></div>
          <h2 className="rv fade-in">Building sites that turn ideas into experiences people remember.</h2>
          <p className="rv fade-in">I'm a Computer Science student at New L.J. Institute of Engineering &amp; Technology, and I take on freelance web projects alongside my degree. I care about how a site feels: layered glass interfaces, 3D scenes, smooth scroll and layouts that stay sharp on every screen.</p>
          <p className="rv fade-in">Class gives me the fundamentals in Java, data structures and algorithms. Right now I'm learning Node.js, Express and MySQL so I can build the backend as well as the front end.</p>
        </div>
        <div className="stats rv fade-in">
          <div className="stat"><b>8.92</b><span className="mono">CPI · B.E. CS</span></div>
          <div className="stat"><b>2028</b><span className="mono">Batch</span></div>
          <div className="stat"><b>3</b><span className="mono">Featured projects</span></div>
          <div className="stat"><b>2</b><span className="mono">Hackathon finals</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
