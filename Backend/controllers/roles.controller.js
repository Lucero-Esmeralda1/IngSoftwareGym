const RolesModel = require('../models/roles.model');

// Obtener todos los roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await RolesModel.obtenerRoles();
    res.json(roles);
  } catch (error) {
    console.error('❌ Error al obtener roles:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Obtener rol por ID
exports.getRolById = async (req, res) => {
  try {
    const rol = await RolesModel.obtenerRolPorId(req.params.id);
    if (!rol) return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// ✅ Crear rol
exports.createRol = async (req, res) => {
  try {
    const id = await RolesModel.crearRol(req.body.nombre);
    res.status(201).json({ id, mensaje: 'Rol creado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear rol', error });
  }
};

// ✅ Actualizar rol
exports.updateRol = async (req, res) => {
  try {
    const updated = await RolesModel.actualizarRol(req.params.id, req.body.nombre);
    if (updated === 0) return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json({ mensaje: 'Rol actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar rol', error });
  }
};

// ✅ Eliminar rol
exports.deleteRol = async (req, res) => {
  try {
    const deleted = await RolesModel.eliminarRol(req.params.id);
    if (deleted === 0) return res.status(404).json({ mensaje: 'Rol no encontrado' });
    res.json({ mensaje: 'Rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar rol', error });
  }
};