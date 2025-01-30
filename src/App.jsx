import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Countdown from './components/countdown/Countdown';
import About from './components/sections/About';
import Itinerary from './components/sections/Itinerary';
import Footer from './components/common/Footer';
import Photos from './components/sections/Photos';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countdown />
      <section id="about">
        <About />
      </section>
      <Photos />
      <Itinerary />
      <Footer />
    </div>
  );
};

export default App;