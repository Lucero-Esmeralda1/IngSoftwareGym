const db = require('../db/connection');

exports.getMiMembresia = async (req, res) => {
    try {
        const correo = req.query.correo;
        if (!correo) return res.status(400).json({ error: "Falta el correo" });

        const [rows] = await db.execute(
        `SELECT 
            m.nombre,
            m.descripcion,
            m.costo,
            p.fecha_pago,
            DATE_ADD(p.fecha_pago, INTERVAL m.duracion_dias DAY) AS fecha_fin,
            DATEDIFF(DATE_ADD(p.fecha_pago, INTERVAL m.duracion_dias DAY), CURDATE()) AS diasRestantes
        FROM pagos p
        JOIN membresias m ON p.id_membresia = m.id
        JOIN usuarios u ON p.id_usuario = u.id
        WHERE u.correo = ?
        ORDER BY p.fecha_pago DESC
        LIMIT 1`,
        [correo]
        );

        if (rows.length === 0) {
        return res.json({
            nombre: "Sin membresía activa",
            diasRestantes: 0,
            estado: "Inactiva"
        });
        }

        const data = rows[0];
        data.estado = data.diasRestantes > 0 ? "Activa" : "Vencida";

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
