const express = require("express");
const router = express.Router();
const controlador = require("../controllers/mis-clases.controller");

router.get("/mis-clases", controlador.getMisClases);

module.exports = router;
