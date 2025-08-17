import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.css';
import ellisMarket from '../../media/home_page/ellis_market.png';
import familyServices from '../../media/home_page/family_and_children_practice_group.png';

function Sidebar({ currentPath }) {
  return (
    <div className="sidebar">
      <Link to="/" className="logo">Si Min Designs</Link>
      
      <nav>
        <div className="nav-section">
          <h2>UX Projects</h2>
          <div className="subtitle">(most recent to least recent)</div>
          
          <Link 
            to="/ellies-market"
            className={`project-item ${currentPath === '/ellies-market' ? 'active' : ''}`}
          >
            <div className="project-content">
              <div className="project-number">03/</div>
              <div className="project-title">E-commerce Shop Design /</div>
              <div className="project-thumbnail">
                <img src={ellisMarket} alt="Ellie's Market" />
              </div>
            </div>
          </Link>
          
          <div className="project-item">
            <div className="project-content">
              <div className="project-number">02/</div>
              <div className="project-title">Website Redesign /</div>
              <div className="project-thumbnail family-services-thumbnail">
                <img src={familyServices} alt="Family Services Group" />
              </div>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-content">
              <div className="project-number">01/</div>
              <div className="project-title">Healthcare Navigation Platform for Newcomers in BC</div>
            </div>
          </div>
        </div>
        
        <div className="nav-section">
          <h2>Photography and Video</h2>
          <div className="subtitle">(work in progress)</div>
        </div>
        
        <div className="nav-section">
          <div className="about-header">
            <h2>About</h2>
            <div className="profile-pic">
              <img src={require('../../media/home_page/about_me_photo.jpeg')} alt="Profile" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  currentPath: PropTypes.string.isRequired
};

export default Sidebar;
