import React from 'react';

const Work: React.FC = () => {
  return (
    <section className="blk" id="work">
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">004 — SELECTED WORK</span></div>
        <h2 className="rv fade-in" style={{ marginBottom: '16px' }}>
          Products that ship, scale, <span className="grad">and think.</span>
        </h2>
        <p className="lead rv fade-in" style={{ marginBottom: 'clamp(40px,6vw,70px)', maxWidth: '40rem', color: 'var(--dim)' }}>
          Things I've built, shipped, and experimented with.
        </p>

        <div className="work-list rv fade-in">
          <div className="work-headers">
            <span></span>
            <span className="mono">PROJECT</span>
            <span className="mono" style={{ textAlign: 'right' }}>STATUS / LINKS</span>
          </div>

          <article className="row-p">
            <div className="n mono">01</div>
            <div className="row-content">
              <h3>PeoplePay360</h3>
              <p>
                PeoplePay360 is an HR and payroll platform that turns employee, contract, schedule, attendance and time-off data into payruns and payslips, with role-based access for employees, HR managers, payroll users and admins.
              </p>
              <ul className="chips">
                <li className="chip">React</li>
                <li className="chip">Vite</li>
                <li className="chip">Tailwind</li>
                <li className="chip">Recharts</li>
                <li className="chip">Node.js</li>
                <li className="chip">Express</li>
              </ul>
            </div>
            <div className="st">
              <span className="mono tag-st" style={{ color: '#2f9bff', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginBottom: '8px', fontSize: '0.65rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><polyline points="20 6 9 17 4 12"></polyline></svg> COMPLETED
              </span>
              <a href="https://github.com/Coder9400/Payroll_360" target="_blank" rel="noopener noreferrer" style={{ border: 'none', color: 'var(--faint)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" style={{ marginRight: '6px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                GITHUB <span>↗</span>
              </a>
            </div>
          </article>

          <article className="row-p">
            <div className="n mono">02</div>
            <div className="row-content">
              <h3>Photo Factory</h3>
              <p>
                A live website for Photo Factory, a wedding photography and cinematography studio in Ahmedabad. It presents wedding stories, films, the founder, awards, Instagram and client testimonials, and turns an enquiry form into a WhatsApp message.
              </p>
              <ul className="chips">
                <li className="chip">Client website</li>
                <li className="chip">Responsive</li>
                <li className="chip">WhatsApp API</li>
              </ul>
            </div>
            <div className="st">
              <span className="mono tag-st" style={{ color: '#2f9bff', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginBottom: '8px', fontSize: '0.65rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><polyline points="20 6 9 17 4 12"></polyline></svg> COMPLETED
              </span>
              <a href="https://photofactoryamd.com/" target="_blank" rel="noopener noreferrer" style={{ border: 'none', color: 'var(--faint)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" style={{ marginRight: '6px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                LIVE SITE <span>↗</span>
              </a>
            </div>
          </article>

          <article className="row-p">
            <div className="n mono">03</div>
            <div className="row-content">
              <h3>GlobeTrotter</h3>
              <p>
                A multi-city trip planner. Build a day-wise itinerary across several cities, attach activities to each day and watch the budget update itself, then share the finished plan on a public link that anyone can view and copy.
              </p>
              <ul className="chips">
                <li className="chip">React</li>
                <li className="chip">Mapbox GL</li>
                <li className="chip">Node.js</li>
                <li className="chip">PostgreSQL</li>
                <li className="chip">Prisma</li>
              </ul>
            </div>
            <div className="st">
              <span className="mono tag-st" style={{ color: '#2f9bff', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginBottom: '8px', fontSize: '0.65rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><polyline points="20 6 9 17 4 12"></polyline></svg> COMPLETED
              </span>
              <a href="https://globetrotter-three-pi.vercel.app" target="_blank" rel="noopener noreferrer" style={{ border: 'none', color: 'var(--faint)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" style={{ marginRight: '6px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                LIVE SITE <span>↗</span>
              </a>
              <a href="https://github.com/Dev12444/-GlobeTrotter" target="_blank" rel="noopener noreferrer" style={{ border: 'none', color: 'var(--faint)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" style={{ marginRight: '6px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                GITHUB <span>↗</span>
              </a>
            </div>
          </article>
          
          <article className="row-p">
            <div className="n mono">04</div>
            <div className="row-content">
              <h3>More on GitHub</h3>
              <p>More of my code, including a Gemini-powered chatbot, two Java games and practice repositories from Git &amp; GitHub classes.</p>
            </div>
            <div className="st">
              <a href="https://github.com/vrajmodi1" target="_blank" rel="noopener noreferrer" style={{ border: 'none', color: 'var(--faint)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" style={{ marginRight: '6px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                EXPAND <span>↗</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Work;
