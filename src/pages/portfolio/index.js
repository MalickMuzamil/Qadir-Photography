import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const sections = [
  { name: 'Portraits', image: '/assets/portraits/cover.jpg', link: '/portfolio/portraits' },
  { name: 'Product', image: '/assets/product/cover.JPG', link: '/portfolio/product' },
  { name: 'Nature Landscapes', image: '/assets/nature-landscapes/cover.jpg', link: '/portfolio/nature-landscapes' },
  { name: 'Fashion', image: '/assets/fashion/cover.jpg', link: '/portfolio/fashion' }
];

export default function Portfolio() {
  return (
    <div className="gallery-home">
      <h1>My Portfolio</h1>
      <div className="sections-grid">
        {sections.map((section) => (
          <Link to={section.link} className="section-card" key={section.name}>
            <img src={section.image} alt={section.name} />
            <div className="overlay">{section.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}