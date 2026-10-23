import React from 'react';

const Resume: React.FC = () => {
  return (
    <section className="blk" id="resume" style={{ paddingTop: 'clamp(40px, 8vw, 80px)' }}>
      <div className="wrap relative">
        <div className="sec-lab rv fade-in"><span className="mono">006 — Resume</span></div>
        <h2 className="big rv fade-in" style={{ textTransform: 'uppercase', marginBottom: '24px' }}>
          My Professional<br/><span className="grad">Journey.</span>
        </h2>
        <p className="lead rv fade-in" style={{ marginBottom: 'clamp(40px,6vw,70px)', maxWidth: '600px' }}>
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
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              background: 'rgba(255,255,255,0.03)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.05)'
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
              <h3 style={{ margin: '0 0 6px', font: '600 clamp(1.2rem, 2vw, 1.5rem)/1.2 var(--display)', letterSpacing: '-.02em', color: '#fff' }}>Vraj Modi - Resume</h3>
              <p style={{ margin: 0, color: 'var(--dim)', fontSize: '0.75rem', fontFamily: 'var(--mono)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PDF Document · 59 KB</p>
            </div>
          </div>
          
          <div className="btn-submit" style={{ pointerEvents: 'none' }}>
            View Resume <span aria-hidden="true" style={{ marginLeft: '4px' }}>↗</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Resume;
