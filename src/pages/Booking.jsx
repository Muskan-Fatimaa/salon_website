import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: location.state?.selectedService || '',
    stylist: location.state?.preferredStylist || '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    { id: 1, name: "Women's Haircut", price: 4500, duration: 45, category: "cut" },
    { id: 2, name: "Men's Haircut", price: 3500, duration: 30, category: "cut" },
    { id: 3, name: "Balayage", price: 15000, duration: 150, category: "color" },
    { id: 4, name: "Full Color", price: 8000, duration: 90, category: "color" },
    { id: 5, name: "Highlights", price: 10000, duration: 120, category: "color" },
    { id: 6, name: "Blowout", price: 4000, duration: 30, category: "style" },
    { id: 7, name: "Updo", price: 7500, duration: 60, category: "style" },
    { id: 8, name: "Keratin Treatment", price: 25000, duration: 120, category: "treatment" },
    { id: 9, name: "Beard Trim", price: 2000, duration: 15, category: "grooming" },
  ];

  const stylists = [
    { id: 1, name: "Sadia", role: "Master Stylist", rating: 4.9, specialties: ["Precision Cuts"] },
    { id: 2, name: "Amina", role: "Color Specialist", rating: 4.8, specialties: ["Balayage", "Color"] },
    { id: 3, name: "Esha", role: "Master Stylist", rating: 4.7, specialties: ["Styling", "Beach Waves"] },
    { id: 4, name: "Zarish", role: "Master Barber", rating: 5.0, specialties: ["Men's Cuts", "Beard"] },
    { id: 5, name: "Rida", role: "Blonde Specialist", rating: 4.9, specialties: ["Blonde", "Highlights"] },
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const selectedService = services.find(s => s.name === bookingData.service);
  const selectedStylist = stylists.find(s => s.name === bookingData.stylist);
  const totalPrice = selectedService?.price || 0;
  const totalDuration = selectedService?.duration || 0;

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1 && !bookingData.service) {
      newErrors.service = 'Please select a service';
    }
    if (step === 2 && !bookingData.stylist) {
      newErrors.stylist = 'Please select a stylist';
    }
    if (step === 3) {
      if (!bookingData.date) newErrors.date = 'Please select a date';
      if (!bookingData.time) newErrors.time = 'Please select a time';
    }
    if (step === 4) {
      if (!bookingData.name) newErrors.name = 'Name is required';
      if (!bookingData.email) newErrors.email = 'Email is required';
      if (!bookingData.phone) newErrors.phone = 'Phone number is required';
      if (bookingData.email && !/\S+@\S+\.\S+/.test(bookingData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (bookingData.phone && !/^[\d\s()-]{10,}$/.test(bookingData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 4) {
        handleSubmit();
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      alert(`Appointment confirmed!\n\nService: ${bookingData.service}\nStylist: ${bookingData.stylist}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\n\nA confirmation email has been sent to ${bookingData.email}`);
    }, 500);
  };

  const handleChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (showConfirmation) {
    return (
      <div className="booking-page">
        <div className="booking-hero">
          <h1>Appointment Confirmed! ✨</h1>
          <p>We can't wait to see you at the salon</p>
        </div>
        <div className="confirmation-section">
          <div className="container">
            <div className="confirmation-card">
              <div className="confirmation-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Your booking is confirmed</h2>
              <div className="confirmation-details">
                <div className="detail-item">
                  <strong>Service:</strong> {bookingData.service}
                </div>
                <div className="detail-item">
                  <strong>Stylist:</strong> {bookingData.stylist}
                </div>
                <div className="detail-item">
                  <strong>Date:</strong> {bookingData.date}
                </div>
                <div className="detail-item">
                  <strong>Time:</strong> {bookingData.time}
                </div>
                <div className="detail-item">
                  <strong>Total:</strong> Rs. {totalPrice}
                </div>
              </div>
              <p className="confirmation-note">
                A confirmation email has been sent to {bookingData.email}
              </p>
              <button className="btn-primary" onClick={() => window.location.href = '/'}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // <div className="booking-page">
    //   <div className="booking-hero">
    //     <h1>Book Your Appointment</h1>
    //     <p>Complete your booking in 4 easy steps</p>
    //   </div>
    <div className="booking-page">

  {/* HERO */}
  <div className="booking-hero">
    <h1 className="hero-title">Booking Appointment</h1>
    <p>Complete your booking in a few easy steps</p>
  </div>

  {/* REST SAME */}

      <div className="container">
        {/* Progress Indicator */}
        <div className="booking-progress">
          <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <span>Select Service</span>
          </div>
          <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <span>Choose Stylist</span>
          </div>
          <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
            <div className="step-number">3</div>
            <span>Pick Time</span>
          </div>
          <div className={`progress-line ${step >= 4 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <span>Your Info</span>
          </div>
        </div>

        <div className="booking-layout">
          <div className="booking-form-container">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="booking-step fade-in-up">
                <h2>Select a Service</h2>
                <p className="step-desc">Choose the service you'd like to book</p>
                
                <div className="service-options">
                  {services.map(service => (
                    <div 
                      key={service.id}
                      className={`service-option ${bookingData.service === service.name ? 'selected' : ''}`}
                      onClick={() => handleChange('service', service.name)}
                    >
                      <div className="service-info">
                        <h3>{service.name}</h3>
                        <p>{service.duration} min</p>
                      </div>
                      <div className="service-price">Rs. {service.price}</div>
                    </div>
                  ))}
                </div>
                {errors.service && <div className="error-message">{errors.service}</div>}
              </div>
            )}

            {/* Step 2: Select Stylist */}
            {step === 2 && (
              <div className="booking-step fade-in-up">
                <h2>Choose Your Stylist</h2>
                <p className="step-desc">Select a stylist for your appointment</p>
                
                <div className="stylist-options">
                  {stylists.map(stylist => (
                    <div 
                      key={stylist.id}
                      className={`stylist-option ${bookingData.stylist === stylist.name ? 'selected' : ''}`}
                      onClick={() => handleChange('stylist', stylist.name)}
                    >
                      <div className="stylist-avatar">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div className="stylist-info">
                        <h3>{stylist.name}</h3>
                        <p>{stylist.role}</p>
                        <div className="stylist-rating">⭐ {stylist.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.stylist && <div className="error-message">{errors.stylist}</div>}
              </div>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <div className="booking-step fade-in-up">
                <h2>Pick Date & Time</h2>
                <p className="step-desc">Choose when you'd like to come in</p>
                
                <div className="date-section">
                  <label>Select Date</label>
                  <div className="date-options">
                    {getAvailableDates().map((date, index) => {
                      const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                      return (
                        <button
                          key={index}
                          className={`date-btn ${bookingData.date === dateStr ? 'selected' : ''}`}
                          onClick={() => handleChange('date', dateStr)}
                        >
                          {dateStr}
                        </button>
                      );
                    })}
                  </div>
                  {errors.date && <div className="error-message">{errors.date}</div>}
                </div>

                <div className="time-section">
                  <label>Select Time</label>
                  <div className="time-options">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        className={`time-btn ${bookingData.time === slot ? 'selected' : ''}`}
                        onClick={() => handleChange('time', slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <div className="error-message">{errors.time}</div>}
                </div>
              </div>
            )}

            {/* Step 4: Your Information */}
            {step === 4 && (
              <div className="booking-step fade-in-up">
                <h2>Your Information</h2>
                <p className="step-desc">Tell us how to reach you</p>
                
                <div className="info-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      value={bookingData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Doe"
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      value={bookingData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@example.com"
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      value={bookingData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(859) 123-4567"
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label>Special Requests (Optional)</label>
                    <textarea 
                      className="form-textarea"
                      value={bookingData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      rows="3"
                      placeholder="Any allergies, reference photos, or special instructions..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="step-navigation">
              {step > 1 && (
                <button className="btn-secondary" onClick={handleBack}>
                  ← Back
                </button>
              )}
              <button className="btn-primary" onClick={handleNext}>
                {step === 4 ? 'Confirm Booking' : 'Continue →'}
              </button>
            </div>
          </div>

          {/* Booking Summary Card - Visible on all steps */}
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-content">
              {selectedService && (
                <div className="summary-item">
                  <span>Service</span>
                  <strong>{selectedService.name}</strong>
                  <span>Rs. {selectedService.price}</span>
                </div>
              )}
              {selectedStylist && (
                <div className="summary-item">
                  <span>Stylist</span>
                  <strong>{selectedStylist.name}</strong>
                </div>
              )}
              {bookingData.date && (
                <div className="summary-item">
                  <span>Date</span>
                  <strong>{bookingData.date}</strong>
                </div>
              )}
              {bookingData.time && (
                <div className="summary-item">
                  <span>Time</span>
                  <strong>{bookingData.time}</strong>
                </div>
              )}
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <strong>Rs. {totalPrice}</strong>
              </div>
              <div className="summary-duration">
                <i className="fas fa-clock"></i>
                Estimated: {totalDuration} minutes
              </div>
            </div>
            <div className="summary-note">
              <i className="fas fa-shield-alt"></i>
              No cancellation fees within 24 hours notice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;