import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { id: 1, question: "Do I need to wash my hair before my appointment?", answer: "It's best to come with clean, dry hair." },
    { id: 2, question: "What is your cancellation policy?", answer: "We require 24 hours notice for cancellations." },
    { id: 3, question: "Do you offer gift cards?", answer: "Yes! Gift cards are available." },
    { id: 4, question: "How early should I arrive?", answer: "Please arrive 5-10 minutes early." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-layout">

      {/* INFO CARDS */}
      <div className="contact-info-grid">
        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Visit Us</h3>
          <p>Salon Location Available</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>Call Us</h3>
          <p>(123) 456-7890</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>contact@salon.com</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-clock"></i>
          <h3>Hours</h3>
          <p>Mon - Sat: 9AM - 6PM</p>
        </div>
      </div>

      {/* FORM + IMAGE */}
      <div className="contact-form-section">

        <div className="contact-form">
          <h2>Send us a message</h2>
          <p>We'll get back within 24 hours</p>

          {submitted && (
            <div className="success-message">
              Thanks for reaching out!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </div>

            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* IMAGE CARD */}
        <div className="modern-contact-card">
          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Contact"
            />
          </div>

          <div className="contact-overlay">
            <h3>Get in Touch ✨</h3>
            <p>We’re here to help you</p>

            <div className="contact-actions">
              <button className="btn-primary">Send Message</button>
              <button className="btn-secondary">Call Now</button>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>FAQ</h2>
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
              {faq.question}
            </button>
            {openFaq === faq.id && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Contact;