const express = require("express");
const router = express.Router();
const controlador = require("../controllers/mi-membresia.controller");

router.get("/mi-membresia", controlador.getMiMembresia);

module.exports = router;
