const express = require("express");
const router = express.Router();
const salesController = require('../controllers/salesController');

//ruta para loguearse 
router.post('/',salesController.NewSale);
router.post('/delete',salesController.DeleteSale);


module.exports = router;
