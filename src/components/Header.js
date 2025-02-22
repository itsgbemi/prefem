import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [activeButton, setActiveButton] = useState("");

  const buttons = [
    { name: "Exit", icon: "exit.svg", activeIcon: "exit-active.svg" },
    { name: "Chat", icon: "message.svg", activeIcon: "message-active.svg" },
    { name: "Menu", icon: "menu.svg", activeIcon: "menu-active.svg" },
  ];

  return (
    <header className="header">
      <img src="/images/logo.svg" alt="Prefem Logo" className="logo" />
      <div className="nav-buttons">
        {buttons.map(({ name, icon, activeIcon }) => (
          <button
            key={name}
            className={`nav-btn ${activeButton === name ? "active" : ""}`}
            onClick={() => setActiveButton(name)}
          >
            <img src={`/images/${activeButton === name ? activeIcon : icon}`} alt={name} />
            <span className="nav-text">{name}</span>
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
                 
