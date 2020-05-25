const express = require("express");
const router = express.Router();
const mysqlConnection = require("../DB/database");

router.get("/", (req, res) => {
  mysqlConnection.query("select * from employe", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
