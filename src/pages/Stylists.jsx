// Stylists.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Stylists.css";

const Stylists = () => {
  const [filterSpecialty, setFilterSpecialty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const stylists = [
    {
      id: 1,
      name: "Sadia",
      role: "Master Stylist",
      experience: 14,
      rating: 4.9,
      specialty: "Precision Cuts",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Amina",
      role: "Color Specialist",
      experience: 12,
      rating: 4.8,
      specialty: "Balayage & Color",
      image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Esha",
      role: "Hair Stylist",
      experience: 10,
      rating: 4.7,
      specialty: "Beach Waves",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Ameer",
      role: "Master Barber",
      experience: 15,
      rating: 5.0,
      specialty: "Classic Barbering",
      image: "https://images.unsplash.com/photo-1635273051368-de31ef6a8cc4?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Rida",
      role: "Blonde Expert",
      experience: 11,
      rating: 4.9,
      specialty: "Blonde & Highlights",
      image: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Aliyan",
      role: "Curl Specialist",
      experience: 9,
      rating: 4.8,
      specialty: "Curly Hair Care",
      image: "https://images.unsplash.com/photo-1635301304768-5f2db6a5499b?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 7,
      name: "Mahnoor",
      role: "Bridal Stylist",
      experience: 8,
      rating: 4.9,
      specialty: "Bridal Hair",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Hira",
      role: "Keratin Expert",
      experience: 10,
      rating: 4.7,
      specialty: "Smoothening & Keratin",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 9,
      name: "Iqra",
      role: "Makeover Artist",
      experience: 7,
      rating: 4.8,
      specialty: "Party Styling",
      image: "https://media.istockphoto.com/id/2070897862/photo/cheerful-young-woman-smiling-positive-and-joyful-happy-curly-haired-student-laughing-looking.webp?a=1&b=1&s=612x612&w=0&k=20&c=6-rnq1Rrx7LV1BbmUSQPIwbvKAV7X81BXItDe2tVu3M=",
    },
  ];

  const filtered = useMemo(() => {
    return stylists.filter((s) => {
      return (
        (filterSpecialty === "all" || s.specialty === filterSpecialty) &&
        (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [filterSpecialty, searchQuery]);

  const specialties = ["all", "Precision Cuts", "Balayage & Color", "Classic Barbering", "Bridal Hair", "Curly Hair Care"];

  return (
    <div className="stylists-page">
      {/* Hero */}
      <div className="stylists-hero">
        <h1>Our Expert Stylists</h1>
        <p>Meet our team of professional hair artists</p>
      </div>

      <div className="container">
        {/* Search */}
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="filters-section">
          {specialties.map((spec) => (
            <button
              key={spec}
              className={`filter-btn ${filterSpecialty === spec ? "active" : ""}`}
              onClick={() => setFilterSpecialty(spec)}
            >
              {spec === "all" ? "All" : spec}
            </button>
          ))}
        </div>

        {/* Stylists Grid */}
        <div className="stylists-grid">
          {filtered.map((stylist) => (
            <div className="stylist-card" key={stylist.id}>
              <div className="card-image">
                <img src={stylist.image} alt={stylist.name} />
              </div>
              <div className="card-content">
                <h3>{stylist.name}</h3>
                <p className="role">{stylist.role}</p>
                <div className="rating">
                  <span>⭐ {stylist.rating}</span>
                  <span>{stylist.experience} years</span>
                </div>
                <p className="specialty">{stylist.specialty}</p>
              </div>
              <div className="card-footer">
                <Link to={`/stylists/${stylist.id}`} className="view-profile-btn">
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stylists;