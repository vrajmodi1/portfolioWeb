import { useEffect, useRef } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initEffects } from './utils/initEffects';

function App() {
  const initialized = useRef(false);

  useEffect(() => {
    // Ensuring initEffects only runs once in strict mode
    if (!initialized.current) {
      initialized.current = true;
      // Slight delay to allow DOM to fully render, especially canvases
      setTimeout(() => {
        initEffects();
      }, 50);
    }
  }, []);

  return (
    <>
      <Loader />
      
      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
