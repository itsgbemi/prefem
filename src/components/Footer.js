import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/", icon: "home.svg" },
    { name: "Report", path: "/report", icon: "report.svg" },
    { name: "SOS", path: "/sos", icon: "sos.svg" },
    { name: "Call", path: "/call", icon: "call.svg" },
    { name: "Hub", path: "/hub", icon: "hub.svg" },
  ];

  return (
    <footer className="footer">
      {pages.map(({ name, path, icon }) => (
        <Link key={name} to={path} className={`footer-link ${location.pathname === path ? "active" : ""}`}>
          <img src={`/images/${location.pathname === path ? icon.replace(".svg", "-active.svg") : icon}`} alt={name} />
          <span className={name === "SOS" ? "sos-text" : ""}>{name}</span>
        </Link>
      ))}
    </footer>
  );
};

export default Footer;

