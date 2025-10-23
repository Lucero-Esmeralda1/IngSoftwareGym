const db = require('../db/connection');

// ✅ Obtener todas las reservas con datos del usuario, clase y horario
async function obtenerReservas() {
  const [rows] = await db.query(`
    SELECT r.id, 
           u.nombre AS usuario, 
           c.nombre AS clase,
           h.dia_semana, h.hora_inicio, h.hora_fin,
           r.estado, r.fecha_reserva
    FROM reservas r
    JOIN usuarios u ON r.id_usuario = u.id
    JOIN horarios h ON r.id_horario = h.id
    JOIN clases c ON h.id_clase = c.id
    ORDER BY r.fecha_reserva DESC
  `);
  return rows;
}

// ✅ Obtener reserva por ID
async function obtenerReservaPorId(id) {
  const [rows] = await db.query(
    `SELECT * FROM reservas WHERE id = ?`,
    [id]
  );
  return rows[0];
}

// ✅ Crear una nueva reserva
async function crearReserva({ id_usuario, id_horario }) {
  const [result] = await db.query(
    `INSERT INTO reservas (id_usuario, id_horario, estado) VALUES (?, ?, 'Pendiente')`,
    [id_usuario, id_horario]
  );
  return result.insertId;
}

// ✅ Actualizar estado de una reserva
async function actualizarReserva(id, { estado }) {
  const [result] = await db.query(
    `UPDATE reservas SET estado = ? WHERE id = ?`,
    [estado, id]
  );
  return result.affectedRows;
}

// ✅ Eliminar reserva
async function eliminarReserva(id) {
  const [result] = await db.query(`DELETE FROM reservas WHERE id = ?`, [id]);
  return result.affectedRows;
}

module.exports = { obtenerReservas, obtenerReservaPorId, crearReserva, actualizarReserva, eliminarReserva };