const express = require('express');
const router = express.Router();
const db = require('../db/conection'); // 👈 Asegúrate que el archivo se llame "connection.js"

console.log('✅ usuarios.routes.js cargado correctamente');

// ✅ Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT u.id, u.nombre, u.apellido, u.correo, u.telefono, r.nombre AS rol
      FROM usuarios u
      LEFT JOIN roles r ON u.id_rol = r.id
    `;
    const [rows] = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error('❌ Error al obtener usuarios:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Obtener usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    if (rows.length === 0)
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('❌ Error al obtener usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Crear usuario
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, password, id_rol } = req.body;

    if (!nombre || !correo || !password)
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' });

    const query = `
      INSERT INTO usuarios (nombre, apellido, correo, telefono, password, id_rol)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [
      nombre,
      apellido,
      correo,
      telefono,
      password,
      id_rol,
    ]);

    res.status(201).json({
      id: result.insertId,
      nombre,
      correo,
      mensaje: 'Usuario creado correctamente',
    });
  } catch (err) {
    console.error('❌ Error al crear usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, correo, telefono, id_rol } = req.body;

    const [result] = await db.query(
      `
      UPDATE usuarios
      SET nombre = ?, apellido = ?, correo = ?, telefono = ?, id_rol = ?
      WHERE id = ?
      `,
      [nombre, apellido, correo, telefono, id_rol, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    res.json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (err) {
    console.error('❌ Error al actualizar usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ✅ Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (err) {
    console.error('❌ Error al eliminar usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
