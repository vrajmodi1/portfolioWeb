import React from 'react';

const Resume: React.FC = () => {
  return (
    <section className="blk" id="resume" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">006 — Resume</span></div>
        <h2 className="rv fade-in">My Professional Journey.</h2>
        <p className="lead rv fade-in" style={{ marginBottom: 'clamp(40px,6vw,70px)' }}>
          A full overview of my education, experience, and the technologies I work with.
        </p>

        <a 
          href="/Vraj_Modi_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="rv fade-in"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            padding: 'clamp(24px, 4vw, 40px) clamp(30px, 5vw, 50px)',
            borderRadius: 'clamp(16px, 2vw, 24px)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              background: 'rgba(47, 155, 255, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--blue)',
              border: '1px solid rgba(47, 155, 255, 0.2)'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ margin: '0 0 6px', font: '700 clamp(1.3rem, 2vw, 1.8rem)/1.2 var(--display)', letterSpacing: '-.02em', color: '#fff' }}>Vraj Modi - Resume</h3>
              <p style={{ margin: 0, color: 'var(--dim)', fontSize: '0.85rem', fontFamily: 'var(--mono)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PDF Document · 59 KB</p>
            </div>
          </div>
          
          <div className="pill solid" style={{ pointerEvents: 'none', background: '#fff', color: '#000', border: 'none', display: 'flex', alignItems: 'center' }}>
            View Resume <span aria-hidden="true" style={{ marginLeft: '6px', fontSize: '1.1em' }}>↗</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Resume;
