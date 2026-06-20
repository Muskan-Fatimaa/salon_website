import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: "40+", label: "Years of Excellence" },
    { number: "15K+", label: "Happy Clients" },
    { number: "10+", label: "Expert Stylists" },
    { number: "100%", label: "Satisfaction Guaranteed" },
  ];

  const teamValues = [
    { icon: "fas fa-heart", title: "Passion", desc: "We love what we do, and it shows in every service." },
    { icon: "fas fa-star", title: "Excellence", desc: "We never compromise on quality and artistry." },
    { icon: "fas fa-users", title: "Community", desc: "Building lasting relationships with our clients." },
    { icon: "fas fa-leaf", title: "Sustainability", desc: "Eco-friendly products and practices." },
  ];

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Over 40 years of hair artistry in Lexington</p>
        </div>
      </div>

      <div className="container">
        {/* Stats Bar */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="about-story">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Headhunter Hairstyling was founded in 1978 with a single mission: to provide exceptional hair services in a welcoming, professional environment. What started as a small salon has grown into a Lexington household name, trusted by thousands of clients.</p>
              <p>Over four decades later, we remain committed to the same principles that built our reputation: quality, creativity, and genuine care for every client who walks through our doors.</p>
              <h3>Our Philosophy</h3>
              <p>We believe that great hair transforms more than just your appearance—it transforms how you feel. Our team stays current with the latest techniques and trends, continuously training to bring you the best in hair artistry.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600" alt="Salon interior" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {teamValues.map((value, index) => (
              <div className="value-card" key={index}>
                <i className={value.icon}></i>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2>Ready to Experience the Headhunter Difference?</h2>
          <p>Book your appointment today and let us bring out your best look.</p>
          <a href="/booking" className="btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default About;