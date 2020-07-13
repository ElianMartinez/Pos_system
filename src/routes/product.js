const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

//ruta para mostrar  
//router.get('/',productController.show);

//ruta para registrar una employe
router.post('/',productController.CreateProduc);


module.exports = router;
