const express = require("express");
const router = express.Router();
const salesController = require('../controllers/salesController');

//ruta para loguearse 
router.post('/',salesController.NewSale);
router.post('/delete',salesController.DeleteSale);
router.post('/addsalesdetail',salesController.AddSDetail);
router.post('/getSalesDetail',salesController.GetSalesDetai);
router.post('/updateSale',salesController.UpdateSales);
router.get('/getSales/:id',salesController.getSales);



module.exports = router;
