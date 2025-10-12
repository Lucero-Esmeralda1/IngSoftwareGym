const express = require('express');
const router = express.Router();
const db = require('../db/conection'); // 👈 Asegúrate que sea "connection" y no "conection"

console.log('✅ roles.routes.js cargado correctamente');

// ✅ Obtener todos los roles
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM roles');
    res.json(rows);
  } catch (err) {
    console.error('❌ Error al obtener roles:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Obtener un rol por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM roles WHERE id = ?', [id]);
    if (rows.length === 0)
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('❌ Error al obtener rol:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Crear nuevo rol
router.post('/', async (req, res) => {
  try {
    const { nombre } = req.body;
    const [result] = await db.query('INSERT INTO roles (nombre) VALUES (?)', [nombre]);
    res.json({ id: result.insertId, nombre });
  } catch (err) {
    console.error('❌ Error al crear rol:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Actualizar rol
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const [result] = await db.query('UPDATE roles SET nombre = ? WHERE id = ?', [nombre, id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json({ mensaje: 'Rol actualizado correctamente' });
  } catch (err) {
    console.error('❌ Error al actualizar rol:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Eliminar rol
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM roles WHERE id = ?', [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json({ mensaje: 'Rol eliminado correctamente' });
  } catch (err) {
    console.error('❌ Error al eliminar rol:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const db = require('../db/conection');

// console.log('✅ roles.routes.js cargado correctamente');


// // ✅ Obtener todos los roles
// router.get('/', (req, res) => {
//   db.query('SELECT * FROM roles', (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// // ✅ Obtener un rol por ID
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('SELECT * FROM roles WHERE id = ?', [id], (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     if (result.length === 0)
//       return res.status(404).json({ mensaje: 'Rol no encontrado' });
//     res.json(result[0]);
//   });
// });

// // ✅ Crear nuevo rol
// router.post('/', (req, res) => {
//   const { nombre } = req.body;
//   db.query('INSERT INTO roles (nombre) VALUES (?)', [nombre], (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ id: result.insertId, nombre });
//   });
// });

// // ✅ Actualizar rol
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const { nombre } = req.body;
//   db.query('UPDATE roles SET nombre = ? WHERE id = ?', [nombre, id], (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ mensaje: 'Rol actualizado correctamente' });
//   });
// });

// // ✅ Eliminar rol
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('DELETE FROM roles WHERE id = ?', [id], (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ mensaje: 'Rol eliminado correctamente' });
//   });
// });

// module.exports = router;
