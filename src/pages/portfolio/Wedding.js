import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const images = [
  '/assets/wedding/image1.jpg',
  '/assets/wedding/image2.jpg',
  '/assets/wedding/image3.jpg'
  // Add more images as needed
];

export default function Wedding() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-section">
      <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
      <h2>Wedding Gallery</h2>

      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Wedding ${index + 1}`} onClick={() => openImage(src)} />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <span className="modal-close" onClick={closeImage}>&times;</span>
          <img src={selectedImage} alt="Zoomed" />
        </div>
      )}
    </div>
  );
}
