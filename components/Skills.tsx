import React, { useState, useEffect } from 'react';

const SKILLS = [
  { name: 'React', badge: 'FRONTEND', sub: 'UI Library', icon: 'devicon-react-original' },
  { name: 'TypeScript', badge: 'LANGUAGE', sub: 'Strict Syntax', icon: 'devicon-typescript-plain' },
  { name: 'Next.js', badge: 'FRAMEWORK', sub: 'React Framework', icon: 'devicon-nextjs-plain', invert: true },
  { name: 'Tailwind', badge: 'STYLING', sub: 'Utility CSS', icon: 'devicon-tailwindcss-plain' },
  { name: 'Node.js', badge: 'BACKEND', sub: 'Runtime', icon: 'devicon-nodejs-plain-wordmark' },
  { name: 'Express.js', badge: 'BACKEND', sub: 'API Framework', icon: 'devicon-express-original', invert: true },
  { name: 'REST APIs', badge: 'API', sub: 'Architecture', icon: 'devicon-graphql-plain' },
  { name: 'MongoDB', badge: 'DATABASE', sub: 'NoSQL', icon: 'devicon-mongodb-plain' },
  { name: 'MySQL', badge: 'DATABASE', sub: 'Relational', icon: 'devicon-mysql-plain' },
  { name: 'Java', badge: 'LANGUAGE', sub: 'Object-Oriented', icon: 'devicon-java-plain' },
  { name: 'Python', badge: 'LANGUAGE', sub: 'Scripting & AI', icon: 'devicon-python-plain' },
  { name: 'C', badge: 'LANGUAGE', sub: 'Low-level', icon: 'devicon-c-plain' },
  { name: 'HTML5', badge: 'FRONTEND', sub: 'Markup', icon: 'devicon-html5-plain' },
  { name: 'CSS3', badge: 'FRONTEND', sub: 'Styling', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', badge: 'LANGUAGE', sub: 'Web Logic', icon: 'devicon-javascript-plain' },
  { name: 'Vite', badge: 'TOOLING', sub: 'Bundler', icon: 'devicon-vitejs-plain' },
  { name: 'Three.js', badge: 'FRONTEND', sub: '3D Graphics', icon: 'devicon-threejs-original', invert: true },
  { name: 'Git', badge: 'TOOLING', sub: 'Version Control', icon: 'devicon-git-plain' },
  { name: 'GitHub', badge: 'PLATFORM', sub: 'Code Hosting', icon: 'devicon-github-original', invert: true },
  { name: 'Vercel', badge: 'PLATFORM', sub: 'Deployment', icon: 'devicon-vercel-original', invert: true },
  { name: 'Flask', badge: 'BACKEND', sub: 'Python Framework', icon: 'devicon-flask-original', invert: true },
  { name: 'Figma', badge: 'DESIGN', sub: 'UI/UX', icon: 'devicon-figma-plain' },
  { name: 'Postman', badge: 'TOOLING', sub: 'API Testing', icon: 'devicon-postman-plain' },
  { name: 'Linux', badge: 'SYSTEM', sub: 'OS Environment', icon: 'devicon-linux-plain', invert: true }
];

const CATEGORIES = {
  FRONTEND: SKILLS.filter(s => ['FRONTEND', 'FRAMEWORK', 'STYLING'].includes(s.badge)),
  BACKEND: SKILLS.filter(s => ['BACKEND', 'DATABASE', 'API'].includes(s.badge)),
  TOOLS: SKILLS.filter(s => ['LANGUAGE', 'TOOLING', 'PLATFORM', 'SYSTEM', 'DESIGN'].includes(s.badge))
};

const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % SKILLS.length);
  };
  
  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? SKILLS.length - 1 : prev - 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandle = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % SKILLS.length);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev === 0 ? SKILLS.length - 1 : prev - 1));
    }
  };

  const activeSkill = SKILLS[activeIndex];

  return (
    <>
      <section className="blk" id="skills">
        <div className="wrap tk">
          <div className="tk-info">
            <div className="sec-lab rv fade-in"><span className="mono">003 — TOOLKIT</span></div>
            <h2 className="rv fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px' }}>Stack I <br/>build with.</h2>
            <p className="lead rv fade-in" style={{ marginBottom: '40px', maxWidth: '24rem', fontSize: '1rem', color: 'var(--dim)' }}>
              Technologies, frameworks, and tools I use to build intelligent, scalable, and modern digital products.
            </p>
            
            <ul className="tk-bullets rv fade-in">
              <li><span className="bullet-dot"></span>{SKILLS.length} TECHNOLOGIES</li>
              <li><span className="bullet-dot"></span>CONTINUOUS EXPLORATION</li>
              <li><span className="bullet-dot"></span>MODERN WEB STACK</li>
            </ul>
          </div>
          
          <div className="carousel-wrapper rv fade-in">
            <div 
              className="carousel-container" 
              style={{ cursor: 'pointer' }} 
              onClick={() => setIsModalOpen(true)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndHandle}
            >
              
              <div className="carousel-top">
                <div className="active-pill">
                  ACTIVE STACK <span style={{color: '#fff', marginLeft: '6px'}}>{String(activeIndex + 1).padStart(2, '0')}/{SKILLS.length}</span>
                </div>
              </div>

              <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous skill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              <div className="carousel-content">
                <div className="skill-icon-wrapper">
                  <div className="orbit-ring">
                    <div className="orbit-dot blue"></div>
                    <div className="orbit-dot white"></div>
                  </div>
                  <div className="skill-icon-box">
                    <i className={`${activeSkill.icon} colored`} style={activeSkill.invert ? { filter: 'invert(1) brightness(100)' } : {}}></i>
                  </div>
                </div>
                <h3 className="skill-name">{activeSkill.name}</h3>
                <div className="skill-sub">{activeSkill.sub}</div>
              </div>

              <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next skill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <div className="carousel-bottom">
                <div className="carousel-hint">
                  CLICK STACK TO VIEW ALL &nbsp;•&nbsp; DRAG OR USE ARROWS
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${((activeIndex + 1) / SKILLS.length) * 100}%` }}></div>
                </div>
                <div className="progress-text mono">
                  {String(activeIndex + 1).padStart(2, '0')} / {SKILLS.length}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Skills Modal */}
      {isModalOpen && (
        <div className="skills-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="skills-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="modal-header-sub">FULL STACK OVERVIEW</div>
                <h2>Technologies I work with</h2>
              </div>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{ pointerEvents: 'none' }}>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="modal-body">
              {/* Frontend Column */}
              <div className="modal-col">
                <h4>FRONTEND</h4>
                <div className="modal-col-list">
                  {CATEGORIES.FRONTEND.map((skill, idx) => (
                    <div key={idx} className="modal-skill-card">
                      <div className="modal-skill-icon">
                        <i className={`${skill.icon} colored`} style={skill.invert ? { filter: 'invert(1) brightness(100)' } : {}}></i>
                      </div>
                      <div className="modal-skill-info">
                        <span className="modal-skill-title">{skill.name}</span>
                        <span className="modal-skill-sub">{skill.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Column */}
              <div className="modal-col">
                <h4>BACKEND & DATABASE</h4>
                <div className="modal-col-list">
                  {CATEGORIES.BACKEND.map((skill, idx) => (
                    <div key={idx} className="modal-skill-card">
                      <div className="modal-skill-icon">
                        <i className={`${skill.icon} colored`} style={skill.invert ? { filter: 'invert(1) brightness(100)' } : {}}></i>
                      </div>
                      <div className="modal-skill-info">
                        <span className="modal-skill-title">{skill.name}</span>
                        <span className="modal-skill-sub">{skill.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Column */}
              <div className="modal-col">
                <h4>LANGUAGES & TOOLING</h4>
                <div className="modal-col-list">
                  {CATEGORIES.TOOLS.map((skill, idx) => (
                    <div key={idx} className="modal-skill-card">
                      <div className="modal-skill-icon">
                        <i className={`${skill.icon} colored`} style={skill.invert ? { filter: 'invert(1) brightness(100)' } : {}}></i>
                      </div>
                      <div className="modal-skill-info">
                        <span className="modal-skill-title">{skill.name}</span>
                        <span className="modal-skill-sub">{skill.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
