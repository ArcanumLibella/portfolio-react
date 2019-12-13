import React from 'react';
import './scss/styles.scss';

// COMPONENTS
import Menu from './components/Menu';
import Hero from './components/Hero';
import ProjectPreview from './components/ProjectPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <ProjectPreview />
      <Footer />
    </div>
  );
}

export default App;
