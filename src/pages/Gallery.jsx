
// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    // Haircuts
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=600",
      title: "Modern Fade Cut",
      category: "haircuts",
      client: "Ali",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600",
      title: "Layered Women Cut",
      category: "haircuts",
      client: "Sara",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
      title: "Sharp Side Cut",
      category: "haircuts",
      client: "John",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1669675935887-fdfb81d37cc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjB0cmltfGVufDB8fDB8fHww",
      title: "Luxury Hair Trim",
      category: "haircuts",
      client: "Emma",
    },

    // Styling
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      title: "Wedding Styling",
      category: "styling",
      client: "Ayesha",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600",
      title: "Party Waves",
      category: "styling",
      client: "Noor",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600",
      title: "Soft Curl Styling",
      category: "styling",
      client: "Maya",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1672788725446-c303ec2b318e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBzdHlsZXMlMjBtYWtldXAlMjB0cmVhdG1lbnQlMjBoYWlyfGVufDB8fDB8fHww",
      title: "Bridal Updo",
      category: "styling",
      client: "Hina",
    },

    // Color
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600",
      title: "Blonde Balayage",
      category: "color",
      client: "Jessica",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
      title: "Brown Highlights",
      category: "color",
      client: "Maria",
    },
   
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
      title: "Red Tone Color",
      category: "color",
      client: "Emily",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
      title: "Luxury Ombre",
      category: "color",
      client: "Sophia",
    },

    // Treatments
    {
      id: 13,
      image:
        "https://media.istockphoto.com/id/1196374239/photo/hairdresser-applies-a-hair-mask-to-the-woman-in-the-beauty-salon-botox-and-keratin-hair.webp?a=1&b=1&s=612x612&w=0&k=20&c=8kXxcxByMItZYi7awI55eFJwnYJzU6RrnbNmt3adwQA=",
      title: "Keratin Therapy",
      category: "treatments",
      client: "Mina",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYSUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Spa Hair Repair",
      category: "treatments",
      client: "Rimsha",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
      title: "Smoothening Care",
      category: "treatments",
      client: "Areeba",
    },
    {
      id: 16,
      image:
        "https://media.istockphoto.com/id/2225411143/photo/woman-receiving-a-facial-beauty-treatment-in-a-spa.webp?a=1&b=1&s=612x612&w=0&k=20&c=4MLpHQWSKxKZKPlg-F-TKnO4C2wZ4Oio6eb0UtbHpKM=",
      title: "Hydration Mask",
      category: "treatments",
      client: "Lara",
    },
     {
      id: 17,
      image:
        "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Makeup Touch",
      category: "color",
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXJjdXR8ZW58MHx8MHx8fDA%3D",
      title: "Cutting toools",
      category: "Cutting",
     
    },

  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "haircuts", label: "Cutting ✂️" },
    { value: "styling", label: "Styling 💇‍♀️" },
    { value: "color", label: "Color 🎨" },
    { value: "treatments", label: "Treatment ✨" },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-page">
      <div className="page-hero">
        <h1>Luxury Salon Gallery</h1>
        <p>Beauty, Style & Confidence</p>
      </div>

      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={filter === cat.value ? "active" : ""}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid-full">
        {filteredItems.map((item) => (
          <div
            className="gallery-item"
            key={item.id}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.client}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.image} alt="" />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.client}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;