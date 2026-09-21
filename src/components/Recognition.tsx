import React from 'react';

const Recognition: React.FC = () => {
  return (
    <section className="blk" id="education" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">005 — Recognition</span></div>
        <h2 className="rv fade-in">Hackathons &amp; <span className="grad">credentials</span>.</h2>

        <div className="rec rec-first rv fade-in" style={{ marginTop: 'clamp(36px,5vw,60px)' }}>
          <div className="rrow">
            <span className="yr">2026</span>
            <div>
              <h3>Odoo Hackathon 2026</h3>
              <p className="role">Frontend Developer · PeoplePay360</p>
            </div>
            <p className="desc">
              Built PeoplePay360, an HR and payroll platform that turns attendance, contracts and time off into payslips. I built the React application shell with role-based access, plus the contracts and working-schedule screens.<br/>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7503058523099004928/" target="_blank" rel="noopener noreferrer">View LinkedIn post ↗</a>
            </p>
            <span className="res grad">Finalist</span>
          </div>
          <div className="rrow">
            <span className="yr">2026</span>
            <div>
              <h3>Hack the Stack Hackathon</h3>
              <p className="role">Organised by StackCode</p>
            </div>
            <p className="desc">
              Our team made it to the finals of the Hack the Stack hackathon.<br/>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493180508445593600/" target="_blank" rel="noopener noreferrer">View LinkedIn post ↗</a>
            </p>
            <span className="res grad">Finalist</span>
          </div>
          <div className="rrow">
            <span className="yr">2026</span>
            <div>
              <h3>Odoo × LDCE Ahmedabad Hackathon '26</h3>
              <p className="role">Frontend Developer · GlobeTrotter</p>
            </div>
            <p className="desc">
              Built GlobeTrotter, a multi-city trip planner with day-wise itineraries, live budgets and shareable trip links, in a team of four. I built the React frontend foundation: sign-in, dashboard, trips, budget charts and profile.
            </p>
            <span className="res"></span>
          </div>
        </div>

        <div className="mono rec-lab rv fade-in">Education</div>
        <div className="rec rv fade-in">
          <div className="rrow">
            <span className="yr">2024 – 2028</span>
            <div>
              <h3>B.E. in Computer Science</h3>
              <p className="role">New L.J. Institute of Engineering &amp; Technology</p>
            </div>
            <p className="desc">Ahmedabad. Currently pursuing the degree, with coursework in Java, data structures and algorithms.</p>
            <span className="res grad">CPI 8.92</span>
          </div>
          <div className="rrow">
            <span className="yr">Certification</span>
            <div>
              <h3>Alpha: DSA with Java</h3>
              <p className="role">Sigma 9 · Apna College</p>
            </div>
            <p className="desc">Course by Shradha Khapra covering data structures, algorithms and problem-solving in Java.</p>
            <span className="res grad">Completed</span>
          </div>
          <div className="rrow">
            <span className="yr">2023 – 2024</span>
            <div>
              <h3>Higher Secondary (HSC)</h3>
              <p className="role">H.B. Kapadia School</p>
            </div>
            <p className="desc"></p>
            <span className="res"></span>
          </div>
          <div className="rrow">
            <span className="yr">2022 – 2023</span>
            <div>
              <h3>Secondary (SSC)</h3>
              <p className="role">H.B. Kapadia School</p>
            </div>
            <p className="desc"></p>
            <span className="res"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
