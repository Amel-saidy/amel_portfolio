// src/components/Hero.jsx - ENHANCED WITH INTERACTIONS
import React from 'react';
import './Hero.css';
import heroPhoto from '../assets/portfolio-image.jpeg';
import { FaArrowRight, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hi, I'm</div>
            <h1 className="hero-name"><span className="highlight">Muhammed Lamin Saidykhan</span></h1>
            <p className="hero-title">Software Developer & IT Technician</p>
            <p className="hero-description">
              A highly motivated and resourceful Computer Science graduate with hands-on experience in software development, backend systems and educational instruction.</p>
            <div className="hero-buttons">
              <button className="cta-button primary" onClick={scrollToProjects}>
                View My Work
                <FaArrowRight />
              </button>
              <button className="cta-button secondary" onClick={scrollToContact}>
                Contact Me
                <FaEnvelope />
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={heroPhoto} alt="Muhammed Lamin Saidykhan" className="hero-photo"/>
              </div>
              <div className="experience-badge" aria-hidden="true">
                <div className="badge-content">
                  <div className="badge-number">2+</div>
                  <div className="badge-text">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;

