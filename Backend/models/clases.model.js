const db = require('../db/connection');

// ✅ Obtener todas las clases con su entrenador y horario
async function obtenerClases() {
  const [rows] = await db.query(`
    SELECT c.id, c.nombre, c.descripcion, 
           u.nombre AS entrenador, 
           h.dia_semana, h.hora_inicio, h.hora_fin, h.capacidad
    FROM clases c
    LEFT JOIN usuarios u ON c.id_entrenador = u.id
    LEFT JOIN horarios h ON c.id = h.id_clase
  `);
  return rows;
}

// ✅ Obtener clase por ID
async function obtenerClasePorId(id) {
  const [rows] = await db.query('SELECT * FROM clases WHERE id = ?', [id]);
  return rows[0];
}

// ✅ Crear clase
async function crearClase({ nombre, descripcion, id_entrenador }) {
  const [result] = await db.query(
    'INSERT INTO clases (nombre, descripcion, id_entrenador) VALUES (?, ?, ?)',
    [nombre, descripcion, id_entrenador]
  );
  return result.insertId;
}

// ✅ Actualizar clase
async function actualizarClase(id, { nombre, descripcion, id_entrenador }) {
  const [result] = await db.query(
    'UPDATE clases SET nombre=?, descripcion=?, id_entrenador=? WHERE id=?',
    [nombre, descripcion, id_entrenador, id]
  );
  return result.affectedRows;
}

// ✅ Eliminar clase
async function eliminarClase(id) {
  const [result] = await db.query('DELETE FROM clases WHERE id = ?', [id]);
  return result.affectedRows;
}


// ✅ NUEVO: Obtener clases por instructor (usando ID)
async function obtenerClasesPorInstructor(id_entrenador) {
  const [rows] = await db.query(`
    SELECT 
      c.id,
      c.nombre,
      c.descripcion,
      c.cupos,
      c.id_entrenador,
      c.activo
    FROM clases c
    WHERE c.id_entrenador = ?
    ORDER BY c.nombre ASC
  `, [id_entrenador]);
  return rows;
}

module.exports = { 
  obtenerClases, 
  obtenerClasePorId, 
  obtenerClasesPorInstructor, // ⬅️ EXPORTAR el nuevo método
  crearClase, 
  actualizarClase, 
  eliminarClase 
};
// module.exports = { obtenerClases, obtenerClasePorId, crearClase, actualizarClase, eliminarClase };
