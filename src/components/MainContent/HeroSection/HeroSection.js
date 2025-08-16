import React from 'react';
import './HeroSection.css';
import landingPageBackground from '../../../media/landing_page_background.png';

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${landingPageBackground})` }}>
      <div className="mac-screen-text">
      </div>
    </section>
  );
}

export default HeroSection;
