const express = require("express");
const router = express.Router();
const mysqlConnection = require('../DB/database');

router.get("/product_category", (req, res) => {
    mysqlConnection.query("select * from product_category where state = 1", (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
            console.log(err);
        }
      });
});
router.post("/product_category", (req, res) => {
   
});

router.put("/product_category", (req, res) => {
   
});


module.exports = router;
