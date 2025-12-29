const ClasesModel = require('../models/clases.model');

// ✅ Obtener todas las clases
exports.getClases = async (req, res) => {
  try {
    const clases = await ClasesModel.obtenerClases();
    res.json(clases);
  } catch (error) {
    console.error('❌ Error al obtener clases:', error);
    res.status(500).json({ mensaje: 'Error al obtener clases', error });
  }
};

// ✅ Obtener clase por ID
exports.getClaseById = async (req, res) => {
  try {
    const clase = await ClasesModel.obtenerClasePorId(req.params.id);
    if (!clase) return res.status(404).json({ mensaje: 'Clase no encontrada' });
    res.json(clase);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clase', error });
  }
};

// ✅ Crear clase
exports.createClase = async (req, res) => {
  try {
    const { nombre, descripcion, id_entrenador } = req.body;
    if (!nombre || !id_entrenador)
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });

    const id = await ClasesModel.crearClase({ nombre, descripcion, id_entrenador });
    res.status(201).json({ id, mensaje: 'Clase creada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear clase', error });
  }
};

// ✅ Actualizar clase
exports.updateClase = async (req, res) => {
  try {
    const updated = await ClasesModel.actualizarClase(req.params.id, req.body);
    if (updated === 0) return res.status(404).json({ mensaje: 'Clase no encontrada' });
    res.json({ mensaje: 'Clase actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar clase', error });
  }
};

// ✅ Eliminar clase
exports.deleteClase = async (req, res) => {
  try {
    const deleted = await ClasesModel.eliminarClase(req.params.id);
    if (deleted === 0) return res.status(404).json({ mensaje: 'Clase no encontrada' });
    res.json({ mensaje: 'Clase eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar clase', error });
  }
};

// ✅ NUEVO: Obtener clases por instructor
exports.getClasesPorInstructor = async (req, res) => {
  try {
    const { id_entrenador } = req.params;
    const clases = await ClasesModel.obtenerClasesPorInstructor(id_entrenador);
    res.json(clases);
  } catch (error) {
    console.error('❌ Error al obtener clases del instructor:', error);
    res.status(500).json({ mensaje: 'Error al obtener clases del instructor', error });
  }
};

exports.getMisClases = async (req, res) => {
  try {
    const idInstructor = req.user.id; // ← desde token

    const clases = await ClasesModel.obtenerClasesPorInstructor(idInstructor);
    res.json(clases);
  } catch (error) {
    console.error('❌ Error al obtener mis clases:', error);
    res.status(500).json({ mensaje: 'Error al obtener mis clases' });
  }
};
