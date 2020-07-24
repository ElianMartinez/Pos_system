const SalesModel = require("../models/salesModel");
const salesModel = new SalesModel();

const NewSale = async (req, res) => {
    
    if(req.body != ""){
       let data = req.body;
     var resp = await salesModel.NewSales(data);

      if(resp == true){
          res.json({
              "res":"true",
              data:""
          });
      }else if(resp == false){
        res.json({
            "res":"false",
            data:"ese codigo ya existe"
        });
      }
    }else{
        res.json({
            "res":"no hay datos",
            data:""
        });
    }
};

const DeleteSale = async (req, res) => {
    
    if(req.body != ""){
       let data = req.body;
     var resp = await salesModel.deleteSales(data.code_sales);
      if(resp == true){
          res.json({
              "res":"true",
              data:""
          });
      }else{

      }
    }else{
        res.json({
            "res":"no hay datos",
            data:""
        });
    }
};

module.exports = { NewSale , DeleteSale};
