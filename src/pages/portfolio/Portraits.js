import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import ImageModal from '../../components/ImageModal';


const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];

export default function Portraits() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(`/assets/portraits/${img}`);
    setModalOpen(true);
  };

  return (
    <div className="gallery-section">
      <Link to="/portfolio" className="back-button">← Back to Portfolio</Link>
      <h2>Portraits Gallery</h2>
      <div className="image-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/assets/portraits/${img}`}
            alt={`Portrait ${i + 1}`}
            onClick={() => openModal(img)}
            style={{ cursor: 'pointer' }}
          />
        ))}
        
      </div>
      <ImageModal isOpen={modalOpen} imageSrc={selectedImage} onClose={() => setModalOpen(false)} />
    </div>
  );
}
