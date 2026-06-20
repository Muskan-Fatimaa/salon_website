import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import imgThreadingWaxing   from '../assets/services/threading-waxing.jpg';
import imgWaxingBody        from '../assets/services/waxing-body.jpg';
import imgSkinPolisher      from '../assets/services/skin-polisher.jpg';
import imgJanssens          from '../assets/services/janssens-treatment.jpg';
import imgIssabella         from '../assets/services/issabella-fruit-france.jpg';
import imgGuinot            from '../assets/services/guinot-treatment.jpg';
import imgHandsFeet         from '../assets/services/hands-feet.jpg';
import imgMassage           from '../assets/services/massage.jpg';
import imgAddOns            from '../assets/services/add-ons.jpg';
import imgNailCare          from '../assets/services/nail-care.jpg';
import imgMehendi           from '../assets/services/mehendi.jpg';
import imgSignature         from '../assets/services/signature-treatment.jpg';
import imgSkinSignature     from '../assets/services/skin-signature-treatment.jpg';

const servicesData = [
  {
    id: 1,
    name: "Threading and Waxing",
    image: imgThreadingWaxing,
    items: [
      { desc: "Eyebrow Threading", price: "Rs 300/-" },
      { desc: "Upper Lip Threading", price: "Rs 150/-" },
      { desc: "Full Face Threading", price: "Rs 800/-" },
      { desc: "Full Arms Waxing", price: "Rs 1200/-" },
      { desc: "Full Legs Waxing", price: "Rs 1500/-" },
      { desc: "Full Body Waxing", price: "Rs 4000/-" },
    ],
  },
  {
    id: 2,
    name: "Waxing (Body)",
    image: imgWaxingBody,
    items: [
      { desc: "Half Arms Waxing", price: "Rs 700/-" },
      { desc: "Full Arms Waxing", price: "Rs 1200/-" },
      { desc: "Half Legs Waxing", price: "Rs 900/-" },
      { desc: "Full Legs Waxing", price: "Rs 1500/-" },
      { desc: "Underarms Waxing", price: "Rs 500/-" },
    ],
  },
  {
    id: 3,
    name: "Skin Polisher",
    image: imgSkinPolisher,
    items: [
      { desc: "Face Polisher", price: "Rs 1500/-" },
      { desc: "Back Polisher", price: "Rs 2000/-" },
      { desc: "Full Body Polisher", price: "Rs 5000/-" },
      { desc: "Neck & Décolleté Polisher", price: "Rs 1800/-" },
    ],
  },
  {
    id: 4,
    name: "SkinCare and Janssen's Treatment",
    image: imgJanssens,
    items: [
      { desc: "Janssen's Facial", price: "Rs 4500/-" },
      { desc: "Janssen's Peel", price: "Rs 5000/-" },
      { desc: "Skin Brightening Treatment", price: "Rs 6000/-" },
      { desc: "Anti-Aging Facial", price: "Rs 7000/-" },
    ],
  },
  {
    id: 5,
    name: "ISSABELLA and Fruit De France",
    image: imgIssabella,
    items: [
      { desc: "ISSABELLA Facial", price: "Rs 3500/-" },
      { desc: "Fruit De France Facial", price: "Rs 4000/-" },
      { desc: "Fruit De France Peel", price: "Rs 4500/-" },
    ],
  },
  {
    id: 6,
    name: "Guinot (Advance Treatment)",
    image: imgGuinot,
    items: [
      { desc: "Guinot Hydradermie Facial", price: "Rs 8000/-" },
      { desc: "Guinot Liftosome Facial", price: "Rs 9000/-" },
      { desc: "Guinot Anti-Aging Treatment", price: "Rs 10000/-" },
    ],
  },
  {
    id: 7,
    name: "Hands & Feets Treatment",
    image: imgHandsFeet,
    items: [
      { desc: "Manicure", price: "Rs 1200/-" },
      { desc: "Pedicure", price: "Rs 1500/-" },
      { desc: "Spa Manicure", price: "Rs 2000/-" },
      { desc: "Spa Pedicure", price: "Rs 2500/-" },
      { desc: "French Manicure", price: "Rs 1800/-" },
    ],
  },
  {
    id: 8,
    name: "Massage",
    image: imgMassage,
    items: [
      { desc: "Swedish Body Massage", price: "Rs 5000/-" },
      { desc: "Deep Tissue Massage", price: "Rs 6000/-" },
      { desc: "Aromatherapy Massage", price: "Rs 5500/-" },
      { desc: "Head Massage", price: "Rs 1500/-" },
    ],
  },
  {
    id: 9,
    name: "Other (Add on to the Treatment)",
    image: imgAddOns,
    items: [
      { desc: "Eye Brow Tinting", price: "Rs 500/-" },
      { desc: "Eye Lash Tinting", price: "Rs 600/-" },
      { desc: "Lip Tinting", price: "Rs 400/-" },
      { desc: "Collagen Eye Mask", price: "Rs 800/-" },
    ],
  },
  {
    id: 10,
    name: "Nail Care",
    image: imgNailCare,
    items: [
      { desc: "Gel Nails", price: "Rs 2500/-" },
      { desc: "Acrylic Nails", price: "Rs 3000/-" },
      { desc: "Nail Art (per nail)", price: "Rs 200/-" },
      { desc: "Nail Polish", price: "Rs 500/-" },
      { desc: "Nail Removal", price: "Rs 800/-" },
    ],
  },
  {
    id: 11,
    name: "Mehendi",
    image: imgMehendi,
    items: [
      { desc: "Bridal Full Hands Mehendi", price: "Rs 8000/-" },
      { desc: "Simple Hands Mehendi", price: "Rs 1500/-" },
      { desc: "Feet Mehendi", price: "Rs 2000/-" },
      { desc: "Arabic Mehendi", price: "Rs 2500/-" },
    ],
  },
  {
    id: 12,
    name: "Sana Sarah (Signature Treatment)",
    image: imgSignature,
    items: [
      { desc: "Hydra Dermi Facial with Advanced Device", price: "Rs 12500/-" },
      { desc: "Full Body Exfoliation", price: "Rs 10000/-" },
      { desc: "Hot Stone Full Body Massage", price: "Rs 12000/-" },
    ],
  },
  {
    id: 13,
    name: "Sana Sarah (Skin Signature Treatment)",
    image: imgSkinSignature,
    items: [
      { desc: "Signature Glow Facial", price: "Rs 15000/-" },
      { desc: "Signature Anti-Aging Treatment", price: "Rs 18000/-" },
      { desc: "Signature Brightening Package", price: "Rs 20000/-" },
    ],
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);
  const panelRef = useRef(null);

  const handleSelect = (id) => {
    const next = activeId === id ? null : id;
    setActiveId(next);
    if (next !== null) {
      // wait for the panel to render, then bring it into view
      requestAnimationFrame(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  };

  const activeService = servicesData.find((s) => s.id === activeId) || null;
  const activeIndex = servicesData.findIndex((s) => s.id === activeId);

  // Figure out how many cards fit per row at the current breakpoint
  // so the detail panel can be inserted directly after the row
  // containing the active card. CSS grid handles the actual layout;
  // here we just decide where in the DOM order the panel sits.
  const getColumns = () => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 960) return 2;
    return 3;
  };

  const renderGridWithPanel = () => {
    const columns = getColumns();
    const rows = [];
    for (let i = 0; i < servicesData.length; i += columns) {
      rows.push(servicesData.slice(i, i + columns));
    }

    const elements = [];
    let consumed = 0;
    rows.forEach((row, rowIdx) => {
      row.forEach((service) => {
        elements.push(
          <button
            key={service.id}
            className={`service-card ${activeId === service.id ? 'is-active' : ''}`}
            onClick={() => handleSelect(service.id)}
            aria-expanded={activeId === service.id}
          >
            <div className="service-card-image">
              <img src={service.image} alt={service.name} loading="lazy" />
            </div>
            <div className="service-card-footer">
              <span className="service-card-name">{service.name}</span>
              <span className="service-card-icon">{activeId === service.id ? '−' : '+'}</span>
            </div>
          </button>
        );
      });
      consumed += row.length;
      const activeInThisRow = activeIndex >= consumed - row.length && activeIndex < consumed;
      if (activeInThisRow && activeService) {
        elements.push(
          <div className="service-panel" key={`panel-${activeService.id}`} ref={panelRef}>
            <div className="service-panel-inner">
              <div className="service-panel-header">
                <div>
                  <span className="service-panel-eyebrow">Sana Sarah</span>
                  <h3>{activeService.name}</h3>
                </div>
                <button
                  className="service-panel-close"
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="service-panel-list">
                {activeService.items.map((item, idx) => (
                  <div className="service-panel-row" key={idx}>
                    <span className="service-panel-desc">{item.desc}</span>
                    <span className="service-panel-price">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="service-panel-actions">
                <Link to="/booking" className="btn-book">Book This Service</Link>
              </div>
            </div>
          </div>
        );
      }
    });
    return elements;
  };

  return (
    <div className="services-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-eyebrow">Treatment Menu</span>
          <h1>Services</h1>
          <p className="breadcrumb">Home / Services</p>
        </div>
      </div>

      <div className="container services-intro">
        <p>
          Thirteen treatment categories, from everyday threading to our
          Skin Signature line. Select a category to see pricing.
        </p>
      </div>

      <div className="container services-grid">
        {renderGridWithPanel()}
      </div>
    </div>
  );
};

export default Services;
