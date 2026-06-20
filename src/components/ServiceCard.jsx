
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ name, price, image, delay = 0 }) => {
  return (
    <div className="service-card" style={{ animationDelay: `${delay}s` }}>

      {/* IMAGE */}
      <div className="service-image">
        <img
          src={image || "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600"}
          alt={name}
        />

        {/* CART BUTTON */}
        <button className="cart-btn" title="Add to cart">
          <i className="fas fa-cart-plus"></i>
        </button>
      </div>

      {/* CONTENT */}
      <div className="service-content">
        <h3 className="service-title">{name}</h3>

        <div className="service-footer">
          <span className="service-price">{price}</span>

          <Link to="/booking" className="book-btn">
            Book
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ServiceCard;