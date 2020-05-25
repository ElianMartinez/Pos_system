const express = require("express");
const router = express.Router();
const mysqlConnection = require("../DB/database");

router.post("/login", (req, res) => {
  const { user, pass } = req.body;

  if (user != undefined && pass != undefined) {
    if (user != "" && pass != "") {
      
        var query = `select * from employe where state = 1 and user = "${user}" and password = ${pass}`;
        mysqlConnection.query(query, (err,rows,fields) => {
            if(!err){
                if(rows != ""){
                    res.json(rows);
                }else{
                    res.json({"res":"false"});
                }
                
            }else{
                console.log(err)
            }
        });
    } else {
      res.json({ res: "los datos estan en blanco"});
     
    }
  }else{
      console.log("No hay datos");
      res.json({"res":"porfavor asigne variales"});
  }
});

module.exports = router;
