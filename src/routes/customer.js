const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

//routes
router.get("/buscar/:name",customerController.buscarC);

module.exports = router;