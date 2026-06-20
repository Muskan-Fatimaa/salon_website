import React from 'react';
import { Link } from 'react-router-dom';
import './StylistCard.css';

const StylistCard = ({
  id,
  name,
  role,
  image,
  rating,
  delay = 0
}) => {
  return (
    <div className="stylist-card" style={{ animationDelay: `${delay}s` }}>

      {/* IMAGE */}
      <div className="stylist-image">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600"
          }
          alt={name}
        />
      </div>

      {/* CONTENT */}
      <div className="stylist-content">

        {/* ROLE */}
        <span className="stylist-role">{role}</span>

        {/* NAME */}
        <h3 className="stylist-name">{name}</h3>

        {/* RATING */}
        <div className="stylist-info">
          <span>⭐ {rating}</span>
        </div>

        {/* ONLY ACTION */}
        <div className="stylist-actions">
          <Link to={`/stylists/${id}`} className="view-btn">
            View Profile
          </Link>
        </div>

      </div>
    </div>
  );
};

export default StylistCard;