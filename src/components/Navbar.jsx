// src/components/Navbar.jsx - ENHANCED WITH MOBILE MENU
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  // Read saved preference from localStorage on first render (lazy initialiser)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body and persist the preference
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" aria-label="Go to top">
            <img src={logo} alt="Muhammed Lamin Saidykhan logo" />
          </a>
        </div>
        
        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#documents" className="nav-link" onClick={closeMobileMenu}>Documents</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={closeMobileMenu}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>
        
        <button 
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;