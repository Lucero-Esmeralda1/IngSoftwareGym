import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register"; // 👈 IMPORTAR
import DashboardCliente from "./pages/DashboardCliente";
import DashboardInstructor from "./pages/DashboardInstructor";
import DashboardAdmin from "./pages/DashboardAdmin";

export default function App() {
  return (
    <Routes>

      {/* LOGIN sin layout */}
      <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />

       {/* REGISTER
      <Route path="/register" element={<Register />} /> */}

      {/* RUTAS CON LAYOUT */}
      <Route element={<Layout />}>

        {/* CLIENTE */}
        <Route path="/cliente" element={<DashboardCliente />} />

        {/* INSTRUCTOR */}
        <Route path="/entrenador" element={<DashboardInstructor />} />

        {/* ADMIN */}
        <Route path="/administrador" element={<DashboardAdmin />} />

      </Route>

      {/* 404 */}
      <Route path="*" element={<h1 style={{color:"white"}}>404</h1>} />

    </Routes>
  );
}


// import { Routes, Route } from 'react-router-dom';

// import Login from './pages/Login';

// // CLIENTE
// import DashboardCliente from "./pages/DashboardCliente";
// import MisReservas from './pages/MisReservas';
// import ClasesDisponibles from './pages/ClasesDisponibles';
// import MiMembresia from './pages/MiMembresia';

// // INSTRUCTOR
// import DashboardInstructor from "./pages/DashboardInstructor";
// import MarcarAsistencia from './pages/MarcarAsistencia';

// // ADMIN
// import DashboardAdmin from "./pages/DashboardAdmin";
// import HorariosCrud from './pages/HorariosCrud';
// import InstructoresCrud from './pages/InstructoresCrud';
// import Reportes from './pages/Reportes';

// export default function App() {
//   return (
//     <Routes>

//       {/* LOGIN */}
//       <Route path="/" element={<Login />} />

//       {/* CLIENTE */}
//       <Route path="/cliente" element={<DashboardCliente />} />
//       <Route path="/cliente/reservas" element={<MisReservas />} />
//       <Route path="/cliente/clases" element={<ClasesDisponibles />} />
//       <Route path="/cliente/membresia" element={<MiMembresia />} />

//       {/* INSTRUCTOR */}
//       <Route path="/entrenador" element={<DashboardInstructor />} />
//       <Route path="/entrenador/asistencia" element={<MarcarAsistencia />} />

//       {/* ADMIN */}
//       <Route path="/administrador" element={<DashboardAdmin />} />
//       <Route path="/administrador/horarios" element={<HorariosCrud />} />
//       <Route path="/administrador/instructores" element={<InstructoresCrud />} />
//       <Route path="/administrador/reportes" element={<Reportes />} />

//       {/* 404 */}
//       <Route path="*" element={<h1 style={{color:"white"}}>404 - Página no encontrada</h1>} />

//     </Routes>

//   );

// }
