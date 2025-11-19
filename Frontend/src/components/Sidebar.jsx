import React from "react";
import { Link } from "react-router-dom";
import "../components/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul>
        <li>🏋️ Dashboard</li>
        <li>📋 Asistencias</li>
        <li>🧑‍💼 Clientes</li>
        <li>⚙️ Configuración</li>
      </ul>
    </aside>
  );
};

export default Sidebar;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-header">
//         <h2>🏋️‍♂️ Gym</h2>
//       </div>

//       <ul className="sidebar-menu">
//         <li>
//           <Link to="/">Inicio</Link>
//         </li>
//         <li>
//           <Link to="/clientes">Clientes</Link>
//         </li>
//         <li>
//           <Link to="/asistencias">Asistencias</Link>
//         </li>
//         <li>
//           <Link to="/pagos">Pagos</Link>
//         </li>
//       </ul>
//     </aside>
//   );
// }
