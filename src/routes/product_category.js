const {Router} = require("express");
const router = Router();
const mysqlConnection = require('../DB/database');

router.get("/", (req, res) => {
    mysqlConnection.query("select * from product_category where state = 1", (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
            console.log(err);
        }
      });
});
router.post("/", (req, res) => {
   
});

router.put("/", (req, res) => {
   
});


module.exports = router;
