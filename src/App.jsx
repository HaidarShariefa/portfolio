import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Technologies from './sections/Technologies';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import BeyondComputer from './sections/BeyondComputer';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-black to-violet-950 min-h-screen text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <BeyondComputer />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;