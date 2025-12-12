const express = require("express");
const router = express.Router();
const controlador = require("../controllers/mis-reservas.controller");

router.get("/mis-reservas", controlador.getMisReservas);

module.exports = router;

