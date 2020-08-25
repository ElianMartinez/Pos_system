const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

//routes
router.get("/buscar/:name",customerController.buscarC);
router.get("/",customerController.GetCustomers);
router.get("/:id",customerController.GetCliente);
router.post("/create",customerController.CreateCustomer);
router.post("/Updatedebit",customerController.UpdateDebitController);



module.exports = router;