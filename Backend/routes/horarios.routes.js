const express = require('express');
const router = express.Router();
const horariosController = require('../controllers/horarios.controller');

router.get('/', horariosController.getHorarios);
router.post('/', horariosController.createHorario);
router.delete('/:id', horariosController.deleteHorario);

module.exports = router;