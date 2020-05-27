const express = require("express");
const router = express.Router();
const employesController = require('../controllers/employesController');

//ruta para loguearse 
router.get('/',employesController.show);




module.exports = router;
