const db = require('../db/connection');

// ✅ Obtener todos los roles
async function obtenerRoles() {
  const [rows] = await db.query('SELECT * FROM roles');
  return rows;
}

// ✅ Obtener rol por ID
async function obtenerRolPorId(id) {
  const [rows] = await db.query('SELECT * FROM roles WHERE id = ?', [id]);
  return rows[0];
}

// ✅ Crear rol
async function crearRol(nombre) {
  const [result] = await db.query('INSERT INTO roles (nombre) VALUES (?)', [nombre]);
  return result.insertId;
}

// ✅ Actualizar rol
async function actualizarRol(id, nombre) {
  const [result] = await db.query('UPDATE roles SET nombre = ? WHERE id = ?', [nombre, id]);
  return result.affectedRows;
}

// ✅ Eliminar rol
async function eliminarRol(id) {
  const [result] = await db.query('DELETE FROM roles WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = { obtenerRoles, obtenerRolPorId, crearRol, actualizarRol, eliminarRol };
