// StylistProfile.jsx - Complete with all 9 stylists
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './StylistProfile.css';

const StylistProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Complete stylist data - ALL 9 STYLISTS
  const stylistsData = {
    1: {
      id: 1,
      name: "Sadia",
      role: "Master Stylist",
      experience: 14,
      rating: 4.9,
      specialty: "Precision Cuts",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      about: "Sadia is our Creative Director and Master Stylist with over 14 years of experience. She specializes in precision cutting and creates customized looks for each client.",
      bio: "Trained at top academies in Paris and Milan, Sadia brings international expertise to every appointment. Her attention to detail and passion for hair artistry makes her one of the most sought-after stylists.",
      completedAppointments: 2500,
      happyClients: 1800,
      education: [
        "Advanced Hair Cutting - Vidal Sassoon Academy, London",
        "Creative Styling Masterclass - Paris Fashion Week",
        "Certified Hair Colorist - Wella Professionals"
      ],
      specialties: ['Precision Cuts', 'Textured Layers', 'French Bob', 'Pixie Cuts'],
      languages: ['English', 'Urdu', 'Punjabi'],
    },
    2: {
      id: 2,
      name: "Amina",
      role: "Color Specialist",
      experience: 12,
      rating: 4.8,
      specialty: "Balayage & Color",
      image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60",
      about: "Amina is our leading Color Specialist with a passion for creating dimensional, natural-looking color that enhances each client's unique beauty.",
      bio: "Having trained with top color houses across Europe, Amina brings international techniques to every color service. She stays current with the latest trends while focusing on hair health.",
      completedAppointments: 2100,
      happyClients: 1500,
      education: [
        "Master Balayage - L'Oréal Academy, Paris",
        "Advanced Color Theory - Wella Global",
        "Color Correction Expert - Redken Academy"
      ],
      specialties: ['Balayage', 'Ombré', 'Color Correction', 'Vivid Colors'],
      languages: ['English', 'Urdu', 'French'],
    },
    3: {
      id: 3,
      name: "Esha",
      role: "Hair Stylist",
      experience: 10,
      rating: 4.7,
      specialty: "Beach Waves",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop&q=60",
      about: "Esha specializes in creating effortless, natural-looking styles that move beautifully.",
      bio: "Esha believes that great styling is about creating looks that are both beautiful and practical for everyday wear.",
      completedAppointments: 1800,
      happyClients: 1300,
      education: [
        "Editorial Styling - Toni & Guy Academy",
        "Bridal Hair Design - Milan Bridal Week"
      ],
      specialties: ['Beach Waves', 'Bridal Updos', 'Hair Extensions'],
      languages: ['English', 'Urdu'],
    },
    4: {
      id: 4,
      name: "Ameer",
      role: "Master Barber",
      experience: 15,
      rating: 5.0,
      specialty: "Classic Barbering",
      image: "https://images.unsplash.com/photo-1635273051368-de31ef6a8cc4?w=600&auto=format&fit=crop&q=60",
      about: "Ameer is our Master Barber, bringing 15 years of expertise in men's grooming.",
      bio: "Trained at renowned barbershops in London and Istanbul, Ameer's precision and attention to detail are unmatched.",
      completedAppointments: 3200,
      happyClients: 2500,
      education: [
        "Master Barber Certification - London School of Barbering",
        "Advanced Razor Techniques - Schorem, Rotterdam"
      ],
      specialties: ['Classic Cuts', 'Skin Fades', 'Beard Sculpting'],
      languages: ['English', 'Urdu', 'Turkish'],
    },
    5: {
      id: 5,
      name: "Rida",
      role: "Blonde Expert",
      experience: 11,
      rating: 4.9,
      specialty: "Blonde & Highlights",
      image: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?w=600&auto=format&fit=crop&q=60",
      about: "Rida is our dedicated Blonde Specialist, known for creating stunning, healthy blonde transformations.",
      bio: "Dedicated to mastering the art of blonde hair, Rida understands the science behind lightening while maintaining optimal hair health.",
      completedAppointments: 1900,
      happyClients: 1450,
      education: [
        "Blonde Mastery - Schwarzkopf Professional",
        "Advanced Highlighting Techniques - Wella"
      ],
      specialties: ['Platinum Blonde', 'Baby Highlights', 'Lowlight Dimension'],
      languages: ['English', 'Urdu'],
    },
    6: {
      id: 6,
      name: "Aliyan",
      role: "Curl Specialist",
      experience: 9,
      rating: 4.8,
      specialty: "Curly Hair Care",
      image: "https://images.unsplash.com/photo-1635301304768-5f2db6a5499b?w=600&auto=format&fit=crop&q=60",
      about: "Aliyan is our Curl Specialist, passionate about helping clients embrace and enhance their natural texture.",
      bio: "After struggling with his own curly hair, Aliyan dedicated his career to understanding the unique needs of textured hair.",
      completedAppointments: 1500,
      happyClients: 1100,
      education: [
        "DevaCut Certified - Curly Hair Institute",
        "Texture Specialist - Ouidad Advanced Training"
      ],
      specialties: ['Curly Cuts', 'Curl Definition', 'Protective Styles'],
      languages: ['English', 'Urdu'],
    },
    7: {
      id: 7,
      name: "Mahnoor",
      role: "Bridal Stylist",
      experience: 8,
      rating: 4.9,
      specialty: "Bridal Hair",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
      about: "Mahnoor is our dedicated Bridal Stylist, specializing in creating stunning wedding day looks that last.",
      bio: "With 8 years of experience in bridal styling, Mahnoor understands the importance of making every bride feel beautiful and confident on her special day.",
      completedAppointments: 1200,
      happyClients: 980,
      education: [
        "Bridal Hair Design - Milan Bridal Academy",
        "Advanced Updo Techniques - London Hair School"
      ],
      specialties: ['Bridal Updos', 'Wedding Styles', 'Veil Integration', 'Hair Accessories'],
      languages: ['English', 'Urdu'],
    },
    8: {
      id: 8,
      name: "Hira",
      role: "Keratin Expert",
      experience: 10,
      rating: 4.7,
      specialty: "Smoothening & Keratin",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
      about: "Hira is our Keratin Treatment specialist, known for transforming frizzy hair into smooth, manageable locks.",
      bio: "Specializing in hair smoothing and repair treatments, Hira helps clients achieve healthier, more manageable hair with long-lasting results.",
      completedAppointments: 1700,
      happyClients: 1400,
      education: [
        "Keratin Treatment Certification - Brazilian Hair Academy",
        "Advanced Hair Repair - Olaplex Training"
      ],
      specialties: ['Keratin Treatment', 'Hair Smoothening', 'Frizz Control', 'Hair Repair'],
      languages: ['English', 'Urdu'],
    },
    9: {
      id: 9,
      name: "Iqra",
      role: "Makeover Artist",
      experience: 7,
      rating: 4.8,
      specialty: "Party Styling",
      image: "https://media.istockphoto.com/id/2070897862/photo/cheerful-young-woman-smiling-positive-and-joyful-happy-curly-haired-student-laughing-looking.webp?a=1&b=1&s=612x612&w=0&k=20&c=6-rnq1Rrx7LV1BbmUSQPIwbvKAV7X81BXItDe2tVu3M=",
      about: "Iqra is our creative Makeover Artist, specializing in complete hair transformations for special events.",
      bio: "With a keen eye for trends and personal style, Iqra creates looks that make clients feel confident and glamorous for any occasion.",
      completedAppointments: 1300,
      happyClients: 1100,
      education: [
        "Editorial Styling - Vidal Sassoon",
        "Event Hair Design - London Fashion Week"
      ],
      specialties: ['Party Styling', 'Event Hair', 'Complete Makeovers', 'Trendy Cuts'],
      languages: ['English', 'Urdu'],
    },
  };

  const stylist = stylistsData[id];

  if (!stylist) {
    return (
      <div className="profile-notfound">
        <div className="container">
          <h2>Stylist Not Found</h2>
          <p>Sorry, we couldn't find the stylist you're looking for.</p>
          <Link to="/stylists" className="back-btn">← Back to Stylists</Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/booking', { state: { preferredStylist: stylist.name } });
  };

  return (
    <div className="stylist-profile-page">
      <div className="container profile-container">
        {/* Profile Header with Avatar */}
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={stylist.image} alt={stylist.name} />
          </div>
          <div className="profile-title">
            <h1>{stylist.name}</h1>
            <p className="role">{stylist.role}</p>
            <div className="stats">
              <span>⭐ {stylist.rating}</span>
              <span>📅 {stylist.experience}+ years</span>
              <span>💇 {stylist.completedAppointments}+ appointments</span>
            </div>
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-main">
            {/* About Section */}
            <div className="info-section">
              <h2>About {stylist.name}</h2>
              <p>{stylist.about}</p>
              <p>{stylist.bio}</p>
            </div>

            {/* Specialties */}
            <div className="info-section">
              <h2>Specialties</h2>
              <div className="specialties-list">
                {stylist.specialties.map((spec, index) => (
                  <span key={index} className="specialty-badge">{spec}</span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="info-section">
              <h2>Education & Training</h2>
              <ul className="education-list">
                {stylist.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="info-section">
              <h2>Languages</h2>
              <div className="languages-list">
                {stylist.languages.map((lang, index) => (
                  <span key={index} className="language-badge">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="info-card">
              <h3>Quick Info</h3>
              <div className="info-item">
                <span>🎯 Specialty</span>
                <strong>{stylist.specialty}</strong>
              </div>
              <div className="info-item">
                <span>⭐ Rating</span>
                <strong>{stylist.rating} / 5.0</strong>
              </div>
              <div className="info-item">
                <span>💇 Happy Clients</span>
                <strong>{stylist.happyClients}+</strong>
              </div>
            </div>

            <div className="info-card">
              <h3>Working Hours</h3>
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Book Appointment Button at Bottom */}
        <div className="book-section">
          <button onClick={handleBookNow} className="book-appointment-btn">
            📅 Book Appointment with {stylist.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StylistProfile;