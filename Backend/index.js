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

// =============================================
// USAR RUTAS
// =============================================
app.use('/api/roles', rolesRoutes);
app.use('/api/usuarios', usuariosRoutes);

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


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'Public', 'uploads')));

// // Rutas
// const rolesRoutes = require('./routes/roles.routes');
// const usuariosRoutes = require('./routes/usuarios.routes');
// // const comentarioRoutes = require('./Routes/comentarios.routes');
// // const reporteRoutes = require('./Routes/reportes.routes');
// // const adminRoutes = require('./Routes/admin.routes');

// // app.use('/api/admin', adminRoutes);

// app.use('/api/roles', rolesRoutes);
// app.use('/api/usuarios', usuariosRoutes);
// // app.use('/api/comentarios', comentarioRoutes);
// // app.use('/api/reportes', reporteRoutes);

// // Manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Error interno del servidor' });
// });

// // Iniciar servidor
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const rolesRoutes = require('./routes/roles.routes');
// const usuariosRoutes = require('./routes/usuarios.routes');

// app.use(cors());
// app.use(express.json());
// app.use('/api/roles', rolesRoutes);
// app.use('/api/usuarios', usuariosRoutesRoutes);
// app.listen(3001, () => {
// console.log('Servidor corriendo en http://localhost:3001');
// });



// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Importar rutas
// const rolesRoutes = require('./routes/roles.routes');
// const usuariosRoutes = require('./routes/usuarios.routes');

// // Usar rutas
// app.use('/api/roles', rolesRoutes);
// app.use('/api/usuarios', usuariosRoutes);

// // Iniciar servidor
// app.listen(3001, () => {
//   console.log('✅ Servidor corriendo en http://localhost:3001');
// });



// const express=require('express');
// const cors=require('cors');
// const app=express();

// app.use(cprs());
// app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send('API Sistema de Gym');
// });

// app.listen(3001,()=>{
//     console.log('Servidor en http://localhost:3001');
// });