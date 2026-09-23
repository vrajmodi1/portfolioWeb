import React from 'react';

const Work: React.FC = () => {
  return (
    <section className="blk" id="work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">004 — Selected Work</span></div>
        <h2 className="rv fade-in">Things I've built.</h2>
        <p className="lead rv fade-in" style={{ marginBottom: 'clamp(40px,6vw,70px)' }}>
          A team-built payroll platform, a live website for a wedding photography studio, and a multi-city trip planner. Every project links to its live site or code.
        </p>



        <article className="row-p rv fade-in">
          <span className="n">01</span>
          <div>
            <h3>PeoplePay360</h3>
            <p>
              PeoplePay360 is an HR and payroll platform that turns employee, contract, schedule, attendance and time-off data into payruns and payslips, with role-based access for employees, HR managers, payroll users and admins. I built parts of the React front end: the application shell with role-based access, and the contracts and working-schedule screens.
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
            <span className="mono tag-st">Team project</span>
            <a href="https://github.com/Coder9400/Payroll_360" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="row-p rv fade-in">
          <span className="n">02</span>
          <div>
            <h3>Photo Factory</h3>
            <p>
              A live website for Photo Factory, a wedding photography and cinematography studio in Ahmedabad. It presents wedding stories, films, the founder, awards, Instagram and client testimonials, and turns an enquiry form into a WhatsApp message with the function type, date, city and budget.
            </p>
            <ul className="chips">
              <li className="chip">Client website</li>
              <li className="chip">Photo &amp; film galleries</li>
              <li className="chip">WhatsApp enquiry</li>
              <li className="chip">Responsive</li>
            </ul>
          </div>
          <div className="st">
            <span className="mono tag-st">Client project</span>
            <a href="https://photofactoryamd.com/" target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="row-p rv fade-in">
          <span className="n">03</span>
          <div>
            <h3>GlobeTrotter</h3>
            <p>
              A multi-city trip planner. Build a day-wise itinerary across several cities, attach activities to each day and watch the budget update itself, then share the finished plan on a public link that anyone can view and copy. Built for the Odoo × LDCE Ahmedabad Hackathon '26. I built the React frontend foundation: authentication, dashboard, trips, budget charts and profile.
            </p>
            <ul className="chips">
              <li className="chip">React</li>
              <li className="chip">Vite</li>
              <li className="chip">Tailwind</li>
              <li className="chip">Recharts</li>
              <li className="chip">Node.js</li>
              <li className="chip">Express</li>
              <li className="chip">PostgreSQL</li>
              <li className="chip">Prisma</li>
            </ul>
          </div>
          <div className="st">
            <span className="mono tag-st">Hackathon project</span>
            <a href="https://globetrotter-three-pi.vercel.app" target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/Dev12444/-GlobeTrotter" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="row-p rv fade-in">
          <span className="n">04</span>
          <div>
            <h3>More on GitHub</h3>
            <p>More of my code, including a Gemini-powered chatbot, two Java games and practice repositories from Git &amp; GitHub classes.</p>
          </div>
          <div className="st">
            <a href="https://github.com/vrajmodi1" target="_blank" rel="noopener noreferrer">Expand <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Work;
