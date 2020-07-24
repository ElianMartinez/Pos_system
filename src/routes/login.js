const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');

//ruta para loguearse 
router.post('/',loginController.login);


module.exports = router;
