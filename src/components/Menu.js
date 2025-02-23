import React, { useState } from 'react';
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
        {/* Dropdown for Change Language */}
        <div className="menu-item dropdown">
          <div className={`dropdown-header ${languageOpen ? 'active' : ''}`} onClick={toggleLanguage}>
            <span>Change Language</span>
            <span className="arrow">{languageOpen ? '\u25B2' : '\u25BC'}</span>
          </div>
          {languageOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item">English</div>
              <div className="dropdown-item">Pidgin</div>
            </div>
          )}
        </div>
        {/* Other menu items */}
        <div className="menu-item">Profile</div>
        <div className="menu-item">Home</div>
        <div className="menu-item">Report</div>
        <div className="menu-item">SOS</div>
        <div className="menu-item">Call For Help</div>
        <div className="menu-item">Hub</div>
        <div className="menu-item">Contact Us</div>
        <div className="menu-item">About Us</div>
      </div>
    </div>
  );
};

export default Menu;
  
