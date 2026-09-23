import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="blk" id="skills" style={{ paddingTop: 0 }}>
      <div className="wrap tk">
        <div>
          <div className="sec-lab rv fade-in"><span className="mono">003 — Toolkit</span></div>
          <h2 className="rv fade-in">Stack I build with.</h2>
          <p className="lead rv fade-in">Technologies, frameworks and tools I use to build sites and small products.</p>
          <div className="tk-meta rv fade-in">
            <span className="mono" id="tkCount">18 technologies</span>
            <span className="mono">Drag to rotate</span>
          </div>
          <button 
            className="pill tk-btn rv fade-in" 
            id="stackBtn" 
            aria-expanded={isOpen} 
            aria-controls="stackList"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Hide full stack ' : 'View full stack '} <span aria-hidden="true">↘</span>
          </button>
          <div className={`stack ${isOpen ? 'open' : ''}`} id="stackList">
            <div>
              <div className="stack-inner">
                <div>
                  <h3>Front end</h3>
                  <ul className="chips">
                    <li className="chip">HTML5</li>
                    <li className="chip">CSS3</li>
                    <li className="chip">JavaScript</li>
                    <li className="chip">React</li>
                    <li className="chip">Next.js</li>
                    <li className="chip">Three.js</li>
                    <li className="chip">Tailwind CSS</li>
                    <li className="chip">Vite</li>
                  </ul>
                </div>
                <div>
                  <h3>Back end &amp; data</h3>
                  <ul className="chips">
                    <li className="chip">Node.js</li>
                    <li className="chip">Express.js</li>
                    <li className="chip">Flask</li>
                    <li className="chip">MySQL</li>
                    <li className="chip">MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h3>Languages, tools &amp; platforms</h3>
                  <ul className="chips">
                    <li className="chip">Java</li>
                    <li className="chip">Python</li>
                    <li className="chip">C</li>
                    <li className="chip">Git</li>
                    <li className="chip">GitHub</li>
                    <li className="chip">Vercel</li>
                  </ul>
                </div>
                <div>
                  <h3>Learning now</h3>
                  <ul className="chips">
                    <li className="chip">Node.js</li>
                    <li className="chip">Express.js</li>
                    <li className="chip">MySQL</li>
                    <li className="chip">Advanced Java</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tk-canvas rv fade-in">
          <canvas id="sphere" aria-label="Rotating cloud of technologies I use" role="img"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;
