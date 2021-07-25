const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//ruta para mostrar
//router.get('/',productController.show);

//ruta para registrar una employe
router.post("/", productController.CreateProduc);
router.post("/updatebarcode", productController.Update_Barcode);
router.post("/presentation", productController.CreatePresenta);
router.post("/update", productController.editProduct);
router.get("/ShowPresentation/:id", productController.ShowPre);
router.get("/ShowProducts/:name", productController.buscarProducts);
router.post("/EditPresente", productController.EditPresenta);
router.get("/ShowProductos/:codigo", productController.ShowProductosBycode);

module.exports = router;
