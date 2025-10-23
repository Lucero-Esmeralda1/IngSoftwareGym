// =============================================
// CONFIGURACIÓN BÁSICA DEL SERVIDOR
// =============================================
require('dotenv').config(); // Cargar variables de entorno (opcional)
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// =============================================
// MIDDLEWARES
// =============================================
app.use(cors());                // Permitir peticiones desde otros orígenes (frontend)
app.use(express.json());        // Habilitar recepción de JSON
app.use('/uploads', express.static(path.join(__dirname, 'Public', 'uploads'))); // Servir archivos estáticos

// =============================================
// IMPORTAR RUTAS
// =============================================
const rolesRoutes = require('./routes/roles.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const clasesRoutes = require('./routes/clases.routes');
const horariosRoutes = require('./routes/horarios.routes');
const reservasRoutes = require('./routes/reservas.routes');
const asistenciasRoutes = require('./routes/asistencias.routes');

// =============================================
// USAR RUTAS
// =============================================
app.use('/api/roles', rolesRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/clases', clasesRoutes);
app.use('/api/horarios', horariosRoutes);
app.use('/api/reservas', reservasRoutes);
console.log('✅ Archivo asistencias.routes.js cargado correctamente');

app.use('/api/asistencias', asistenciasRoutes);

// Rutas base
app.get('/', (req, res) => {
  res.send('🚀 API del Sistema de Gestión de Espacios Formativos (Gimnasio) está en funcionamiento.');
});

// =============================================
// MANEJO DE ERRORES (Middleware final)
// =============================================
app.use((err, req, res, next) => {
  console.error('❌ Error interno del servidor:', err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});


// =============================================
// INICIO DEL SERVIDOR
// =============================================
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo correctamente en: http://localhost:${PORT}`);
});