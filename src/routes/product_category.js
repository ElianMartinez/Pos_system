const express = require("express");
const router = express.Router();
const mysqlConnection = require("../DB/database");

router.get("/product_category", (req, res) => {
  mysqlConnection.query("select * from employe limit 100", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
