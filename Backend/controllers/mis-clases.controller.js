const db = require('../db/connection');

exports.getMisClases = async (req, res) => {
    try {
        const correo = req.query.correo;
        if (!correo) return res.status(400).json({ error: "Falta el parámetro 'correo'" });

        const [rows] = await db.execute(
        `SELECT c.id,
                c.nombre,
                c.descripcion,
                c.cupos,
                c.activo,
                u.nombre AS instructor,
                h.dia_semana,
                h.hora_inicio,
                h.hora_fin
        FROM clases c
        JOIN horarios h ON c.id = h.id_clase
        JOIN usuarios u ON c.id_entrenador = u.id
        WHERE u.correo = ? AND c.activo = 1
        ORDER BY h.dia_semana, h.hora_inicio`,
        [correo]
        );

        res.json(rows);
    } catch (error) {
        console.error("❌ Error en getMisClases:", error);
        res.status(500).json({ error: error.message });
    }
};


// Crear mi clase real (del usuario logueado)
exports.createMiClase = async (req, res) => {
    try {
        const correo = req.user.correo; // usuario logueado
        const { nombre, descripcion, cupos, dia_semana, hora_inicio, hora_fin } = req.body;
        const [result] = await db.execute(
        `INSERT INTO clases (nombre, descripcion, cupos, id_entrenador, activo) VALUES (?, ?, ?, (SELECT id FROM usuarios WHERE correo = ?), 1)`,
        [nombre, descripcion, cupos, correo]
        );
        const [horarioResult] = await db.execute(
        `INSERT INTO horarios (id_clase, dia_semana, hora_inicio, hora_fin, capacidad) VALUES (?, ?, ?, ?, ?)`,
        [result.insertId, dia_semana, hora_inicio, hora_fin, cupos]
        );
        res.json({ id: result.insertId, mensaje: "Clase creada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar mi clase real (del usuario logueado)
exports.deleteMiClase = async (req, res) => {
    try {
        const correo = req.user.correo; // usuario logueado
        const { id } = req.params;
        const [result] = await db.execute(`DELETE FROM clases WHERE id = ? AND id_entrenador = (SELECT id FROM usuarios WHERE correo = ?)`, [id, correo]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Clase no encontrada' });
        res.json({ mensaje: "Clase eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};