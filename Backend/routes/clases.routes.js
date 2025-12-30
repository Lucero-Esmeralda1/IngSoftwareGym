const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // Ajusta según tu configuración

// GET - Obtener clases de un entrenador específico
router.get('/instructor/:id', async (req, res) => {
  try {
    const entrenadorId = req.params.id;
    
    console.log('🔍 Buscando clases para entrenador ID:', entrenadorId);
    
    const query = `
      SELECT 
        c.id,
        c.nombre,
        c.descripcion,
        c.cupos,
        c.activo,
        u.nombre AS entrenador_nombre,
        u.apellido AS entrenador_apellido
      FROM clases c
      LEFT JOIN usuarios u ON c.id_entrenador = u.id
      WHERE c.id_entrenador = ?
      ORDER BY c.nombre ASC
    `;
    
    const [clases] = await db.query(query, [entrenadorId]);
    
    console.log(`✅ Se encontraron ${clases.length} clases`);
    
    res.json(clases);
    
  } catch (error) {
    console.error('❌ Error al obtener clases:', error);
    res.status(500).json({ 
      error: 'Error al obtener las clases del entrenador',
      details: error.message 
    });
  }
});

// GET - Obtener todas las clases (útil para admin)
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT 
        c.id,
        c.nombre,
        c.descripcion,
        c.cupos,
        c.activo,
        c.id_entrenador,
        CONCAT(u.nombre, ' ', u.apellido) AS entrenador
      FROM clases c
      LEFT JOIN usuarios u ON c.id_entrenador = u.id
      ORDER BY c.nombre ASC
    `;
    
    const [clases] = await db.query(query);
    res.json(clases);
    
  } catch (error) {
    console.error('❌ Error al obtener todas las clases:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear nueva clase (para admin)
router.post('/', async (req, res) => {
  try {
    const { nombre, descripcion, cupos, id_entrenador, activo } = req.body;
    
    const query = `
      INSERT INTO clases (nombre, descripcion, cupos, id_entrenador, activo)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    const [result] = await db.query(query, [
      nombre, 
      descripcion, 
      cupos || 10, 
      id_entrenador, 
      activo !== undefined ? activo : true
    ]);
    
    res.status(201).json({
      message: 'Clase creada exitosamente',
      id: result.insertId
    });
    
  } catch (error) {
    console.error('❌ Error al crear clase:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUT - Actualizar clase (para admin)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, cupos, id_entrenador, activo } = req.body;
    
    const query = `
      UPDATE clases 
      SET nombre = ?, descripcion = ?, cupos = ?, id_entrenador = ?, activo = ?
      WHERE id = ?
    `;
    
    await db.query(query, [nombre, descripcion, cupos, id_entrenador, activo, id]);
    
    res.json({ message: 'Clase actualizada exitosamente' });
    
  } catch (error) {
    console.error('❌ Error al actualizar clase:', error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Eliminar clase (para admin)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    await db.query('DELETE FROM clases WHERE id = ?', [id]);
    
    res.json({ message: 'Clase eliminada exitosamente' });
    
  } catch (error) {
    console.error('❌ Error al eliminar clase:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const clasesController = require('../controllers/clases.controller');

// router.get('/', clasesController.getClases);
// router.get('/instructor/:id_entrenador', clasesController.getClasesPorInstructor);
// router.get('/:id', clasesController.getClaseById);
// router.post('/', clasesController.createClase);
// router.put('/:id', clasesController.updateClase);
// router.delete('/:id', clasesController.deleteClase);

// // router.get('/mis-clases', authMiddleware, clasesController.getMisClases);
// // router.get('/', clasesController.getClases);
// // router.get('/:id', clasesController.getClaseById);
// // router.post('/', clasesController.createClase);
// // router.put('/:id', clasesController.updateClase);
// // router.delete('/:id', clasesController.deleteClase);

// router.get('/', clasesController.getClases);
// router.get('/:id', clasesController.getClaseById);
// router.get('/instructor/:id_entrenador', clasesController.getClasesPorInstructor); // ⬅️ NUEVA RUTA
// router.post('/', clasesController.createClase);
// router.put('/:id', clasesController.updateClase);
// router.delete('/:id', clasesController.deleteClase);

module.exports = router;