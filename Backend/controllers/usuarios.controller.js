const UsuariosModel = require('../models/usuarios.model');
const db = require('../db/connection');




// ✅ Obtener todos los usuarios
//exports.getUsuarios = async (req, res) => {
//  try {
//    const usuarios = await UsuariosModel.obtenerUsuarios();
//    res.json(usuarios);
//  } catch (error) {
//    res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
//  }
//};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuariosModel.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
  }
};

// ✅ Obtener usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await UsuariosModel.obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuario', error });
  }
};

// ✅ Crear usuario
exports.createUsuario = async (req, res) => {
  try {
    const id = await UsuariosModel.crearUsuario(req.body);
    res.status(201).json({ id, mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear usuario', error });
  }
};

// ✅ Actualizar usuario
exports.updateUsuario = async (req, res) => {
  try {
    const updated = await UsuariosModel.actualizarUsuario(req.params.id, req.body);
    if (updated === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar usuario', error });
  }
};

// ✅ Eliminar usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const deleted = await UsuariosModel.eliminarUsuario(req.params.id);
    if (deleted === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar usuario', error });
  }
};

/////////////////////////////////// Me

// Login real con depuración exacta


exports.login = async (req, res) => {

  console.log("📌 BODY:", req.body);
  console.log("📌 CORREO:", req.body.correo);
  console.log("📌 PASSWORD:", req.body.password);

  try {
    const { correo, password } = req.body;

    const [rows] = await db.execute(
      `SELECT u.id, u.nombre, u.apellido, u.correo, u.password, r.nombre AS rol 
      FROM usuarios u 
      JOIN roles r ON u.id_rol = r.id 
      WHERE u.correo = ? AND u.password = ? AND u.activo = 1`,
      [correo, password]
    );

    console.log("📌 RESULTADO SQL:", rows);

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json(rows[0]);

  } catch (error) {
    console.log("❌ Error interno del servidor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
