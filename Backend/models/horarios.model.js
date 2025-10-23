const db = require('../db/connection');

// ✅ Obtener todos los horarios
async function obtenerHorarios() {
  const [rows] = await db.query(`
    SELECT h.id, c.nombre AS clase, h.dia_semana, h.hora_inicio, h.hora_fin, h.capacidad
    FROM horarios h
    LEFT JOIN clases c ON h.id_clase = c.id
  `);
  return rows;
}

// ✅ Crear horario
async function crearHorario({ id_clase, dia_semana, hora_inicio, hora_fin, capacidad }) {
  const [result] = await db.query(
    'INSERT INTO horarios (id_clase, dia_semana, hora_inicio, hora_fin, capacidad) VALUES (?, ?, ?, ?, ?)',
    [id_clase, dia_semana, hora_inicio, hora_fin, capacidad]
  );
  return result.insertId;
}

// ✅ Eliminar horario
async function eliminarHorario(id) {
  const [result] = await db.query('DELETE FROM horarios WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = { obtenerHorarios, crearHorario, eliminarHorario };
