import React, { useState } from 'react';
import '../styles/Header.css';
import Menu from './Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleExit = () => {
    window.location.href = "about:blank";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <a href="index.html">
          <img src="/images/logo.svg" alt="Prefem Logo" className="logo" />
        </a>
        <div className="nav-buttons">
    
          <button className="nav-btn" onClick={handleExit}>
            <img src="/images/exit.svg" alt="Exit" />
            <span className="nav-text">Exit</span>
          </button>
        
          <button className="nav-btn" onClick={toggleMenu}>
            <img src="/images/menu.svg" alt="Menu" />
            <span className="nav-text">Menu</span>
          </button>
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
  
