const db = require('../db/connection');

// ✅ Obtener todos los usuarios
async function obtenerUsuarios() {
  const query = `
    SELECT u.id, u.nombre, u.apellido, u.correo, u.telefono, r.nombre AS rol
    FROM usuarios u
    LEFT JOIN roles r ON u.id_rol = r.id
  `;
  const [rows] = await db.query(query);
  return rows;
}

// ✅ Obtener usuario por ID
async function obtenerUsuarioPorId(id) {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
}

// ✅ Crear usuario
async function crearUsuario({ nombre, apellido, correo, telefono, password, id_rol }) {
  const [result] = await db.query(
    'INSERT INTO usuarios (nombre, apellido, correo, telefono, password, id_rol) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, apellido, correo, telefono, password, id_rol]
  );
  return result.insertId;
}

// ✅ Actualizar usuario
async function actualizarUsuario(id, { nombre, apellido, correo, telefono, id_rol }) {
  const [result] = await db.query(
    'UPDATE usuarios SET nombre=?, apellido=?, correo=?, telefono=?, id_rol=? WHERE id=?',
    [nombre, apellido, correo, telefono, id_rol, id]
  );
  return result.affectedRows;
}

// ✅ Eliminar usuario
async function eliminarUsuario(id) {
  const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = { obtenerUsuarios, obtenerUsuarioPorId, crearUsuario, actualizarUsuario, eliminarUsuario };
