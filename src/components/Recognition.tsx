import React from 'react';

const Recognition: React.FC = () => {
  return (
    <section className="blk" id="education" style={{ paddingTop: 0 }}>
      <div className="wrap relative">
        <div className="sec-lab rv fade-in"><span className="mono">005 — Recognition</span></div>
        <h2 className="rv fade-in" style={{ marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          Hackathons &amp; <span className="grad">credentials</span>.
        </h2>

        <div className="timeline-container rv fade-in">
          {/* Hackathon 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">2026</span>
                <span className="badge grad">Finalist</span>
              </div>
              <h3>Odoo Hackathon 2026</h3>
              <p className="role">Frontend Developer · PeoplePay360</p>
              <p className="desc">
                Built PeoplePay360, an HR and payroll platform that turns attendance, contracts and time off into payslips. I built the React application shell with role-based access, plus the contracts and working-schedule screens.
              </p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7503058523099004928/" target="_blank" rel="noopener noreferrer" className="timeline-link">
                View LinkedIn post <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          
          {/* Hackathon 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">2026</span>
                <span className="badge grad">Finalist</span>
              </div>
              <h3>Hack the Stack Hackathon</h3>
              <p className="role">Organised by StackCode</p>
              <p className="desc">
                Our team made it to the finals of the Hack the Stack hackathon.
              </p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493180508445593600/" target="_blank" rel="noopener noreferrer" className="timeline-link">
                View LinkedIn post <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          
          {/* Hackathon 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">2026</span>
                <span className="badge" style={{ color: 'var(--faint)' }}>Participation</span>
              </div>
              <h3>Odoo × LDCE Ahmedabad Hackathon '26</h3>
              <p className="role">Frontend Developer · GlobeTrotter</p>
              <p className="desc">
                Built GlobeTrotter, a multi-city trip planner with day-wise itineraries, live budgets and shareable trip links, in a team of four. I built the React frontend foundation: sign-in, dashboard, trips, budget charts and profile.
              </p>
            </div>
          </div>
        </div>

        <div className="mono rec-lab rv fade-in" style={{ textAlign: 'center', marginTop: 'clamp(60px, 8vw, 100px)', marginBottom: 'clamp(30px, 4vw, 50px)', color: 'var(--dim)', letterSpacing: '0.2em' }}>
          EDUCATION & CERTIFICATIONS
        </div>
        
        <div className="timeline-container rv fade-in">
          {/* Edu 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">2024 – 2028</span>
                <span className="badge grad">CPI 8.92</span>
              </div>
              <h3>B.E. in Computer Science</h3>
              <p className="role">New L.J. Institute of Engineering &amp; Technology</p>
              <p className="desc" style={{ marginBottom: 0 }}>
                Ahmedabad. Currently pursuing the degree, with coursework in Java, data structures and algorithms.
              </p>
            </div>
          </div>
          
          {/* Edu 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">Certification</span>
                <span className="badge" style={{ color: 'var(--faint)' }}>Apna College</span>
              </div>
              <h3>Alpha: DSA with Java</h3>
              <p className="role">Sigma 9</p>
              <p className="desc" style={{ marginBottom: 0 }}>
                Course by Shradha Khapra covering data structures, algorithms and problem-solving in Java.
              </p>
            </div>
          </div>
          
          {/* Edu 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">Certification</span>
                <span className="badge" style={{ color: 'var(--faint)' }}>Apna College</span>
              </div>
              <h3>Sigma: Web Development</h3>
              <p className="role">Sigma 9</p>
              <p className="desc" style={{ marginBottom: 0 }}>
                Comprehensive course covering full-stack web development.
              </p>
            </div>
          </div>

          {/* Edu 4 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="yr mono">2023 – 2024</span>
              </div>
              <h3>Higher Secondary (HSC)</h3>
              <p className="role" style={{ marginBottom: 0 }}>H.B. Kapadia School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
