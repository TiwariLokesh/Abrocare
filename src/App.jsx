import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Screenshot } from './components/Screenshot';
import Services from './components/Services';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-0"> {/* Adjust padding to account for fixed navbar */}
        <Hero />
        <Screenshot/>
        <Features/>
        <About/>
        <Services/>
      </main>
    </div>
  );
};

export default App;
