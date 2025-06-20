import React from 'react';
import './assets/css/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;