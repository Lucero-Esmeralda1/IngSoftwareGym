import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-left">
        <img 
          src="/logo.png" 
          alt="Logo"
          className="navbar-logo"
        />
      </div>

      {/* LINKS */}
      <div className="navbar-right">
        <a href="#" className="nav-link">Gimnasios</a>
        <a href="#" className="nav-link">Tu Espacio</a>

        <button className="inscribete-btn">
          ¡Inscríbete ya!
        </button>
      </div>
    </nav>
  );
}


// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import "./Navbar.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <h2 className="logo">Gym Aesthetic</h2>

//         <ul className="nav-links">
//           <li>Gimnasios</li>
//           <li>Planes</li>
//           <li>Nosotros</li>
//         </ul>

//         <button className="btn-inscribete">Inscríbete Ya!</button>

//         {/* Ícono de menú */}
//         <div className="menu-icon" onClick={() => setIsOpen(true)}>
//           &#9776; {/* tres líneas horizontales */}
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }



// import "../components/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar-container">
//       <h1 className="navbar-title">Gym Aesthetic</h1>

//       <div className="navbar-links">
//         <a href="/">Inicio</a>
//         <a href="/asistencias">Asistencias</a>
//         <a href="/clientes">Clientes</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




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

