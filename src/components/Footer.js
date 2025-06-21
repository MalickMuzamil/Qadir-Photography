import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons-footer">
        <a href="https://www.instagram.com/zaheerphotography_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61577424922749" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/zaheer-photography-0373a1340/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
      <p>© 2025 Abdul Qadir</p>
    </footer>
  );
};

export default Footer;
