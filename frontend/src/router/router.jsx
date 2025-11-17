// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 📄 Importación de páginas
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Usuarios from '../pages/Usuarios';
import Clases from '../pages/Clases';
import Horarios from '../pages/Horarios';
import Reservas from '../pages/Reservas';
import Asistencias from '../pages/Asistencias';
import Pagos from '../pages/Pagos';
// import NotFound from '../pages/NotFound'; // opcional

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de inicio (Login) */}
        <Route path="/" element={<Login />} />

        {/* Panel principal */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Módulos del gimnasio */}
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/asistencias" element={<Asistencias />} />
        <Route path="/pagos" element={<Pagos />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
