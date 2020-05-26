const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/',loginController.login);

// router.post("/", (req, res) => {
//   const { user, pass } = req.body;

//   if (user != undefined && pass != undefined) {
//     if (user != "" && pass != "") {
      
    
//     } else {
//       res.json({"res": "los datos estan en blanco"});
     
//     }
//   }else{
//       console.log("No hay datos");
//       res.json({"res":"porfavor asigne variales"});
//   }
// });

module.exports = router;
