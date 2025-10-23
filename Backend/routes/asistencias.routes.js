const express = require('express');
const router = express.Router();
const asistenciasController = require('../controllers/asistencias.controller');

router.get('/test', (req, res) => {
  res.send('✅ Ruta de asistencias funcionando');
});


router.get('/', asistenciasController.getAsistencias);
router.get('/:id', asistenciasController.getAsistenciaById);
router.post('/', asistenciasController.createAsistencia);
router.put('/:id', asistenciasController.updateAsistencia);
router.delete('/:id', asistenciasController.deleteAsistencia);

module.exports = router;
