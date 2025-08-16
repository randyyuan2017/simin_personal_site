import React from 'react';
import './MainContent.css';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import backgroundImage from '../../media/landing_page_background.png';

function MainContent() {
  return (
    <div className="main-content">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default MainContent;
