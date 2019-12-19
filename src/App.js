import React, { useState } from 'react';
import './scss/styles.scss';



// COMPONENTS
import Burger from './components/Burger';
import Menu from './components/Menu';
import Hero from './components/Hero';
import ProjectPreview from './components/ProjectPreview';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Hero />
      <ProjectPreview />
      <div className="about-skills">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;