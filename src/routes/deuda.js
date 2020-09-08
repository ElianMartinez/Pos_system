const express = require("express");
const router = express.Router();
const deudaController = require('../controllers/deudaController');

//ruta para agregar un registro de deuda

router.post('/',deudaController.CreateDeuda);
router.get('/getDeuda/:id',deudaController.getDeuda);
router.get('/updateDeuda/:id',deudaController.UpdateDeuda);

module.exports = router;
