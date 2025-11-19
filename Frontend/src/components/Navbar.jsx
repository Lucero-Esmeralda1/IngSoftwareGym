import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1 className="navbar-title">Gym Aesthetic</h1>

      <div className="navbar-links">
        <a href="/">Inicio</a>
        <a href="/asistencias">Asistencias</a>
        <a href="/clientes">Clientes</a>
      </div>
    </nav>
  );
};

export default Navbar;


// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <span>Gym Aesthetic</span>
//       </div>

//       <ul className="nav-links">
//         <li><Link to="/">Inicio</Link></li>
//         <li><Link to="/clientes">Clientes</Link></li>
//         <li><Link to="/pagos">Pagos</Link></li>
//         <li><Link to="/asistencias">Asistencias</Link></li>
//       </ul>
//     </nav>
//   );
// }

