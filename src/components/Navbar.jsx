import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Stylists', to: '/stylists' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📍 1680 University Rd, Gujrat, Punjab, Pakistan</span>
        </div>
        <div className="top-bar-center">
          <span>🕒 Mon–Sat: 9AM–6PM</span>
          <span>📞 0301-6338575</span>
        </div>
        <div className="top-bar-right">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link className="navbar-logo" to="/">
          <span className="logo-title">Headhunter</span>
          <span className="logo-subtitle">Hair Styling</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={location.pathname === link.to ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/booking" className="navbar-cta">
            Book Now
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;