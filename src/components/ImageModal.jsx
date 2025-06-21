// components/ImageModal.jsx
import React from 'react';
import './ImageModal.css';

export default function ImageModal({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <span className="modal-close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={imageSrc} alt="Zoomed" />
    </div>
  );
}
