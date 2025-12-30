const db = require('../db/connection');

exports.getResumen = async (req, res) => {
  try {
    // 1. Contar clientes (id_rol = 3)
    const [clientes] = await db.execute('SELECT COUNT(*) as total FROM usuarios WHERE id_rol = 3 AND activo = 1');
    
    // 2. Contar entrenadores (id_rol = 2)
    const [entrenadores] = await db.execute('SELECT COUNT(*) as total FROM usuarios WHERE id_rol = 2 AND activo = 1');
    
    // 3. Contar clases activas
    const [clases] = await db.execute('SELECT COUNT(*) as total FROM clases');

    res.json({
      clientes: clientes[0].total,
      entrenadores: entrenadores[0].total,
      clasesHoy: clases[0].total,
      ingresos: 15240 // Aquí podrías sumar pagos si tienes la tabla
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};