import React from 'react';
import './AboutSection.css';
import learnMoreImg from '../../../media/learn_more.png';
import collabImg from '../../../media/collab.png';
import aboutMeImg from '../../../media/about_me.png';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-columns">
        <div className="about-left-column">
          <img src={aboutMeImg} alt="About Me" className="about-me-img" />
          <img src={collabImg} alt="Collab" className="collab-img" />
        </div>
        
        <div className="about-right-column">
          <div className="about-content">
            <h3>Hi, I'm Simin — a brand and UX designer.</h3>
            
            <p>I help small businesses express their brand voice and create engaging digital experiences.</p>
            
            <p>My design journey is nonlinear. With roots in psychology, project management, and creative direction, I strive to create digital experiences that are functional, beautiful, and personal.</p>
          </div>
          
          <div className="learn-more-container">
            <img src={learnMoreImg} alt="Learn More" className="learn-more-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
