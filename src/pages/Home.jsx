import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroBg from '../assets/home-img.jpg'; // ← HERO BG: src/assets/home_bg.png

import ServiceCard from '../components/ServiceCard';
import StylistCard from '../components/StylistCard';

import cutImg from '../assets/services/women-cut.jpg';
import colorImg from '../assets/services/coloring.jpg';
import spaImg from '../assets/services/spa.jpg';
import facialImg from '../assets/services/facial.jpg';
import keratinImg from '../assets/services/keratin.jpg';
import makeupImg from '../assets/services/makeup.jpg';
import nailsImg from '../assets/services/manicure.jpg';
import massageImg from '../assets/services/balayage.jpg';

import stylist1 from '../assets/stylists/stylist1.jpg';
import stylist4 from '../assets/stylists/stylist4.jpg';
import stylist5 from '../assets/stylists/stylist5.jpg';

const Home = () => {
  const featuredServices = [
    { name: "Women's Haircut", price: "Rs. 5k", image: cutImg },
    { name: "Balayage", price: "Rs. 8k", image: massageImg },
    { name: "Makeup", price: "Rs. 7k", image: makeupImg },
    { name: "Manicure", price: "Rs. 3k", image: nailsImg },
    { name: "Facial", price: "Rs. 4k", image: facialImg },
    { name: "Hair Coloring", price: "Rs. 6k", image: colorImg },
    { name: "Spa Therapy", price: "Rs. 9k", image: spaImg },
    { name: "Keratin Treatment", price: "Rs. 10k", image: keratinImg },
  ];

  const featuredStylists = [
    { name: "Sadia", role: "Creative Director", rating: 4.9, image: stylist1 },
    { name: "Amina", role: "Color Specialist", rating: 4.8, image: stylist5 },
    { name: "Zarish", role: "Master Stylist", rating: 5.0, image: stylist4 },
  ];

  const testimonials = [
    { name: "Eman B.", text: "Absolutely love my new balayage! Amina is a true artist.", rating: 5, service: "Color" },
    { name: "Ali R.", text: "Best haircut I've ever had. Zarish is a master of her craft.", rating: 5, service: "Men's Cut" },
    { name: "Aliya L.", text: "The salon is beautiful and the service is impeccable.", rating: 5, service: "Styling" },
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300"
    },
    {
      before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300",
      after: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300"
    },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="home-hero">
        <img src={heroBg} alt="Luxury hair styling" className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <div className="home-hero-badge">Est. 2018</div>
          <h1 className="home-hero-title">
            Where Beauty Meets
            <span>Expertise</span>
          </h1>
          <p className="home-hero-subtitle">
            Experience luxury hair care from Gujrat's finest professional stylists.
            Book your transformation today.
          </p>
          <div className="home-hero-buttons">
            <Link to="/booking" className="btn-primary">Book Appointment</Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <div className="trust-strip">
        <div className="container trust-strip-inner">
          <div className="trust-item"><i className="fas fa-certificate" /><span>Licensed Professionals</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><i className="fas fa-leaf" /><span>Premium Products</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><i className="fas fa-shield-alt" /><span>Safe & Sanitized</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><i className="fas fa-smile" /><span>100% Satisfaction</span></div>
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <div className="about-image-ring">
              <img
                src="https://plus.unsplash.com/premium_photo-1664048712492-9d395c204e37?w=600&auto=format&fit=crop&q=60"
                alt="Salon Interior"
                className="about-image"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400"; }}
              />
            </div>
            <div className="about-float-badge">
              <span className="float-num">1,000+</span>
              <span className="float-label">Happy Clients</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">The Studio</span>
            <h2 className="about-heading">We Will Change<br />Your Outlook</h2>
            <p className="about-desc">
              We believe in delivering nothing but the best. Immerse yourself in a world
              of unparalleled beauty treatments and rejuvenation. Experience the epitome
              of excellence — your pampering awaits.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Awards Won</span>
              </div>
            </div>
            <Link to="/contact" className="btn-location">Location & Hours</Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">What We Offer</span>
            <h2>Our Services</h2>
            <p>Discover our most requested treatments and transformations</p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
           {/* ─── QUICK BOOKING ─── */}
      <div className="quick-booking">
        <div className="container">
          <div className="quick-booking-card">
            <div className="quick-booking-info">
              <i className="fas fa-calendar-alt" />
              <div>
                <h4>Ready for a new look?</h4>
                <p>Book your appointment in under 2 minutes</p>
              </div>
            </div>
            <Link to="/booking" className="btn-primary">Book Now →</Link>
          </div>
        </div>
      </div>

      {/* ─── BEFORE & AFTER ─── */}
      <section className="section ba-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Real Results</span>
            <h2>Before & After</h2>
            <p>See the transformations our clients love</p>
          </div>
          <div className="before-after-grid">
            {beforeAfter.map((item, index) => (
              <div className="before-after-card" key={index}>
                <div className="ba-image">
                  <img src={item.before} alt="Before" />
                  <span className="ba-label">Before</span>
                </div>
                <div className="ba-arrow">→</div>
                <div className="ba-image">
                  <img src={item.after} alt="After" />
                  <span className="ba-label">After</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* ─── TEAM LEADERS ─── */}
      <section className="section leaders-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">The People Behind the Magic</span>
            <h2>Our Team Leaders</h2>
            <p>Meet the visionaries who make every visit unforgettable</p>
          </div>
          <div className="stylists-grid">
            {featuredStylists.map((stylist, index) => (
              <StylistCard key={index} {...stylist} delay={index * 0.1} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/stylists" className="btn-outline">Meet the Full Team →</Link>
          </div>
        </div>
      </section>

     {/* ─── OFFER ─── */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-card">
            <div className="offer-content">
              <span className="offer-tag">Limited Time</span>
              <h2>First Time Client?</h2>
              <p>Get 15% off your first service when you book online</p>
              <Link to="/booking" className="btn-primary">Claim Offer →</Link>
            </div>
            <div className="offer-icon">
              <i className="fas fa-gift" />
            </div>
          </div>
        </div>
      </section>
      {/* 🏡 HOME SERVICES AT YOUR DOORSTEP */}
      <section className="doorstep-section">
        <h2 className="doorstep-heading">Home services at your doorstep</h2>
        <div className="doorstep-container">
          {/* LEFT: Icon Grid */}
          <div className="doorstep-grid">
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/salon-icon.png" alt="Salon" /></div>
              <p>Salon</p>
            </div>
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/Hair-icon.png" alt="Hair" /></div>
              <p>Hair</p>
            </div>
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/grooming-icon.jpg" alt="Grooming" /></div>
              <p>Grooming</p>
            </div>
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/haircut.png" alt="Cutting" /></div>
              <p>Cutting</p>
            </div>
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/barbershop.png" alt="Style" /></div>
              <p>Style</p>
            </div>
            <div className="doorstep-card">
              <div className="icon-circle"><img src="/images/Treatment.png" alt="Treatment" /></div>
              <p>Hair Treatment</p>
            </div>
          </div>

          {/* RIGHT: 4 Images */}
          <div className="doorstep-images">
            <img src="/images/service1.jpg" alt="Service 1" />
            <img src="/images/service2.jpg" alt="Service 2" />
            <img src="/images/service3.jpg" alt="Service 3" />
            <img src="/images/service4.jpg" alt="Service 4" />
          </div>
        </div>
      </section>

 

  
    </>
  );
};

export default Home;