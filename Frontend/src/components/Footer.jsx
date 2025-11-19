import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      © {new Date().getFullYear()} Gym Aesthetic - Todos los derechos reservados.
    </footer>
  );
};

export default Footer;


// import React from "react";
// import "./Footer.css";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <p>© 2025 MiGym. Todos los derechos reservados.</p>
//     </footer>
//   );
// }
