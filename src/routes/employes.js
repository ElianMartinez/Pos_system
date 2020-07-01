const express = require("express");
const router = express.Router();
const employesController = require('../controllers/employesController');

//ruta para mostrar  
router.get('/',employesController.show);

//ruta para registrar una employe
router.post('/',employesController.create);



module.exports = router;
