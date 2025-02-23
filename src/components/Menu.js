import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  return (
    <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <button className="close-menu" onClick={onClose}>X</button>
      </div>
      <div className="menu-content">
        <div className="menu-item dropdown">
          <div
            className={`dropdown-header ${languageOpen ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            <span>Change Language</span>
            <span className="arrow">{languageOpen ? '\u25B2' : '\u25BC'}</span>
          </div>
          {languageOpen && (
            <div className="dropdown-content">
              <a href="index.html" className="dropdown-item">English</a>
              <div className="dropdown-item">Pidgin</div>
            </div>
          )}
        </div>
        <div className="menu-item"><Link to="/profile" onClick={onClose}>Profile</Link></div>
        <div className="menu-item"><Link to="/" onClick={onClose}>Home</Link></div>
        <div className="menu-item"><Link to="/report" onClick={onClose}>Report</Link></div>
        <div className="menu-item"><Link to="/sos" onClick={onClose}>SOS</Link></div>
        <div className="menu-item"><Link to="/call" onClick={onClose}>Call</Link></div>
        <div className="menu-item"><Link to="/hub" onClick={onClose}>Hub</Link></div>
        <div className="menu-item"><Link to="/contact" onClick={onClose}>Contact Us</Link></div>
        <div className="menu-item"><Link to="/about" onClick={onClose}>About Us</Link></div>
      </div>
    </div>
  );
};

export default Menu;
