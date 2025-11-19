// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>Gym Aesthetic</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/pagos">Pagos</Link></li>
        <li><Link to="/asistencias">Asistencias</Link></li>
      </ul>
    </nav>
  );
}

