import React, { useRef, type FormEvent } from 'react';

const Contact: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const n = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const m = msgRef.current?.value.trim();
    
    if (!n || !email || !m) {
      if (noteRef.current) noteRef.current.textContent = 'Please fill in your name, email and message.';
      return;
    }
    
    const subject = encodeURIComponent('Project enquiry from ' + n);
    const body = encodeURIComponent(m + '\n\n— ' + n + ' (' + email + ')');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=vrajm1904@gmail.com&su=${subject}&body=${body}`, '_blank');
    
    if (noteRef.current) {
      noteRef.current.textContent = 'If Gmail did not open, write to vrajm1904@gmail.com directly.';
    }
  };

  return (
    <section className="blk" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">006 — Contact</span></div>
        <h2 className="big rv fade-in">Let's build<br/><span className="grad">something<br/>amazing.</span></h2>
        <div className="ct">
          <div className="contact-info rv fade-in">
            <h3 style={{ margin: '0 0 24px', font: '800 2.2rem var(--display)', color: '#fff', letterSpacing: '-0.02em', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>Contact Us</h3>
            <a href="mailto:vrajm1904@gmail.com" className="contact-item">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <span className="mono">Email</span>
                <b>vrajm1904@gmail.com</b>
              </div>
            </a>
            <a href="https://github.com/vrajmodi1" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div>
                <span className="mono">GitHub</span>
                <b>@vrajmodi1</b>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/vraj-modi-36249b336/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <span className="mono">LinkedIn</span>
                <b>Vraj Modi</b>
              </div>
            </a>
            <div className="contact-item">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span className="mono">Location</span>
                <b>Ahmedabad, Gujarat</b>
              </div>
            </div>
          </div>
          <form className="rv fade-in" id="contactForm" noValidate onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ margin: '0 0 8px', font: '700 1.8rem var(--display)' }}>Get in Touch</h3>
              <p style={{ margin: 0, color: 'var(--dim)', fontSize: '0.95rem' }}>Feel free to drop a line below!</p>
            </div>
            <label>
              <span className="mono">Name</span>
              <input ref={nameRef} id="fName" autoComplete="name" placeholder="Your name" required />
            </label>
            <label>
              <span className="mono">Email</span>
              <input ref={emailRef} id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span className="mono">Message</span>
              <textarea ref={msgRef} id="fMsg" placeholder="Tell me about your project" required></textarea>
            </label>
            <div className="form-footer">
              <button className="btn-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
              <p className="note" id="formNote" role="status" ref={noteRef}>
                This opens a pre-filled Gmail draft to Vraj.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
