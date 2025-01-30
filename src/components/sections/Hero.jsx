import React from 'react';
import flowerImage from '../../assets/images/rose.png';

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <img src={flowerImage} alt="Floral decoration" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Sara & Daniel</h1>
        <p className="hero-subtitle">June 15, 2024 · Tegucigalpa</p>
      </div>
    </div>
  );
};

export default Hero;
