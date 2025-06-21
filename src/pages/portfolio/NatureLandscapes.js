import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import ImageModal from '../../components/ImageModal';

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

export default function NatureLandscapes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(`/assets/nature-landscapes/${img}`);
    setModalOpen(true);
  };

  return (
    <div className="gallery-section">
      <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
      <h2>Nature Landscapes Gallery</h2>
      <div className="image-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/assets/nature-landscapes/${img}`}
            alt={`Landscape ${i + 1}`}
            onClick={() => openModal(img)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <ImageModal isOpen={modalOpen} imageSrc={selectedImage} onClose={() => setModalOpen(false)} />
    </div>
  );
}
