const AsistenciasModel = require('../models/asistencias.model');

// ✅ Obtener todas las asistencias
exports.getAsistencias = async (req, res) => {
  try {
    const asistencias = await AsistenciasModel.obtenerAsistencias();
    res.json(asistencias);
  } catch (error) {
    console.error('❌ Error al obtener asistencias:', error);
    res.status(500).json({ mensaje: 'Error al obtener asistencias', error });
  }
};

// ✅ Obtener asistencia por ID
exports.getAsistenciaById = async (req, res) => {
  try {
    const asistencia = await AsistenciasModel.obtenerAsistenciaPorId(req.params.id);
    if (!asistencia) return res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    res.json(asistencia);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener asistencia', error });
  }
};

// ✅ Registrar nueva asistencia
exports.createAsistencia = async (req, res) => {
  try {
    const { id_reserva, presente } = req.body;
    if (!id_reserva) return res.status(400).json({ mensaje: 'Falta el campo id_reserva' });

    const id = await AsistenciasModel.registrarAsistencia({ id_reserva, presente });
    res.status(201).json({ id, mensaje: 'Asistencia registrada correctamente' });
  } catch (error) {
    console.error('❌ Error al registrar asistencia:', error);
    res.status(500).json({ mensaje: 'Error al registrar asistencia', error });
  }
};

// ✅ Actualizar asistencia (presente o no)
exports.updateAsistencia = async (req, res) => {
  try {
    const { presente } = req.body;
    const updated = await AsistenciasModel.actualizarAsistencia(req.params.id, { presente });
    if (updated === 0) return res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    res.json({ mensaje: 'Asistencia actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar asistencia', error });
  }
};

// ✅ Eliminar asistencia
exports.deleteAsistencia = async (req, res) => {
  try {
    const deleted = await AsistenciasModel.eliminarAsistencia(req.params.id);
    if (deleted === 0) return res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    res.json({ mensaje: 'Asistencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar asistencia', error });
  }
};
