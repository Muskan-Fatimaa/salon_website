import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Headhunter</h3>
            <p>Premium hair styling since 2018. Where creativity meets excellence in every transformation.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/stylists">Stylists</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><i className="fas fa-phone"></i> 0301-6338575</li>
              <li><i className="fas fa-envelope"></i> sadiaafzaal1046@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> 1680 University Rd, Gujrat, Punjab, Pakistan</li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4>Hours</h4>
            <ul>
              <li>Mon-Fri: 9am - 6pm</li>
              <li>Saturday: 10am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <Link to="/booking" className="footer-cta">Book Appointment →</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2018 Headhunter Hairstyling. All rights reserved. | Where design meets effortless salon booking</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;