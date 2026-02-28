// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Muhammed Lamin Saidykhan. Banjul, The Gambia.</span>
        <div className="footer-social">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/muhammed-lamin-saidykhan-60417b365"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammed Lamin Saidykhan on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com/muhammed.saidykhan.904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammed Lamin Saidykhan on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="social-link"
            href="https://x.com/Muhammedla43753?t=tlAxVXQ-UmAGiv1RwP9ggQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammed Lamin Saidykhan on X"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
