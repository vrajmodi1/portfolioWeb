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
    
    window.location.href = `mailto:vrajm1904@gmail.com?subject=${encodeURIComponent('Project enquiry from ' + n)}&body=${encodeURIComponent(m + '\n\n— ' + n + ' (' + email + ')')}`;
    
    if (noteRef.current) {
      noteRef.current.textContent = 'If your email app did not open, write to vrajm1904@gmail.com directly.';
    }
  };

  return (
    <section className="blk" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-lab rv fade-in"><span className="mono">006 — Contact</span></div>
        <h2 className="big rv fade-in">Let's build<br/><span className="grad">something<br/>amazing.</span></h2>
        <div className="ct">
          <div className="links rv fade-in">
            <a href="mailto:vrajm1904@gmail.com">
              <span className="mono">Email</span>
              <b>vrajm1904@gmail.com</b>
            </a>
            <a href="https://github.com/vrajmodi1" target="_blank" rel="noopener noreferrer">
              <span className="mono">GitHub</span>
              <b>@vrajmodi1</b>
            </a>
            <a href="https://www.linkedin.com/in/vraj-modi-36249b336/" target="_blank" rel="noopener noreferrer">
              <span className="mono">LinkedIn</span>
              <b>Vraj Modi</b>
            </a>
            <a href="#contact">
              <span className="mono">Location</span>
              <b>Ahmedabad, Gujarat</b>
            </a>
          </div>
          <form className="rv fade-in" id="contactForm" noValidate onSubmit={handleSubmit}>
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
            <div>
              <button className="pill solid" type="submit">Send message <span aria-hidden="true">↗</span></button>
            </div>
            <p className="note" id="formNote" role="status" ref={noteRef}>
              This opens a pre-filled email to Vraj.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
