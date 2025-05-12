import React from 'react';
import './Header.css'; // We'll create this CSS file next
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaDribbble, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <strong>Address:</strong> Villianur, Puducherry-605110, India
          <span className="divider">|</span>
          <strong>Email:</strong> sales@napcen.com
        </div>
        <div className="top-right">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaPinterestP />
          <FaDribbble />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="logo">
          <img src="/logo.png" alt="Napcen Logo" />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Wet Scrubbers</a>
          <a href="#">Other Products</a>
          <a href="#">Accessories</a>
          <a href="#">Industries</a>
          <a href="#">Company</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="call-info">
          <FaPhoneAlt className="phone-icon" />
          <div>
            <small>Call Us Now</small><br />
            <strong>+91-7904469219</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;