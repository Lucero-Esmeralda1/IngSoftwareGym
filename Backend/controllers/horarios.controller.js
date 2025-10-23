const HorariosModel = require('../models/horarios.model');

// ✅ Obtener horarios
exports.getHorarios = async (req, res) => {
  try {
    const horarios = await HorariosModel.obtenerHorarios();
    res.json(horarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener horarios', error });
  }
};

// ✅ Crear horario
exports.createHorario = async (req, res) => {
  try {
    const { id_clase, dia_semana, hora_inicio, hora_fin, capacidad } = req.body;
    if (!id_clase || !dia_semana || !hora_inicio || !hora_fin)
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });

    const id = await HorariosModel.crearHorario({ id_clase, dia_semana, hora_inicio, hora_fin, capacidad });
    res.status(201).json({ id, mensaje: 'Horario creado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear horario', error });
  }
};

// ✅ Eliminar horario
exports.deleteHorario = async (req, res) => {
  try {
    const deleted = await HorariosModel.eliminarHorario(req.params.id);
    if (deleted === 0) return res.status(404).json({ mensaje: 'Horario no encontrado' });
    res.json({ mensaje: 'Horario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar horario', error });
  }
};
