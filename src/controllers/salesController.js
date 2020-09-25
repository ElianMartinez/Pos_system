const SalesModel = require("../models/salesModel");
const salesModel = new SalesModel();
const moment = require('moment');



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

const AddSDetail = async (req,res) => {

    if(req.body != ""){
        let data = req.body;
       let ress = await salesModel.AddSalesDetail(data);
        if(ress == true){
            res.json({
                "res":"ok",
                "data":""
            });
        }else{
            res.json({
                "res":"error",
                "data":ress
            });
        }

    }

}

const getSales = async (req,res) => {
    let id = req.params.id;
    if(id > 0){
        const result = await salesModel.GetSales(id);
        var valor = generarNuevoJson(result);
        var json = JSON.parse(valor);
        res.json({
                "res":"ok",
                "data":json,
        });
    }
}

    const UpdateSales = async (req,res) =>
    {   let data = req.body;
        if(data != ""){
           let resul = await salesModel.UpdateSale(data);
           if(resul){
                res.json({
                    "res":"ok",
                    "data":""
                });
           }else{
               res.json({
                   "res":"error",
                   "data":resul
               });
           }
        }
    }

   function generarNuevoJson(datos)
    {
        if(datos.length > 0){

            var newArray = "[";
            for(var i = 0; i < datos.length; i++){
              
                var today = new Date(datos[i].date);
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
    
                today = yyyy + '-' + mm + '-' + dd;
                today1 = dd + '/' + mm + '/' + yyyy;
    
    
                let now = moment(`${today} ${datos[i].time}`).locale('es-do');
                
                if(i+1 == datos.length){
                    newArray += `{
                        "id_type":${datos[i].type},
                        "id_sale":${datos[i].id_sale},
                        "date":"${today1}",
                        "time":"${now.format('LT')}",
                        "total":${datos[i].total_pay},
                        "FPago":"${datos[i].name}",
                        "id_fp":${datos[i].id_payment_method},
                        "data_relative":"${now.fromNow()}",
                        "code_sales": "${datos[i].code_sales}"
                        
                    }`;
                }else{
                    newArray += `{
                        "id_type":${datos[i].type},
                        "id_sale":${datos[i].id_sale},
                        "date":"${today1}",
                        "time":"${now.format('LT')}",
                        "total":${datos[i].total_pay},
                        "FPago":"${datos[i].name}",
                        "id_fp":${datos[i].id_payment_method},
                        "data_relative":"${now.fromNow()}",
                        "code_sales": "${datos[i].code_sales}"

                    },`;
                }
                
            }
        }else{
            return "[]";
        } 

    return newArray+"]";
           
       
    }

    const GetSalesDetai = async (req,res) => {
        let data = req.body;
        if(data != ""){
            let resul = await salesModel.GetSalesDetail(data.id_sales, data.id_type_sale);
            res.json({
                "res":"ok",
                "data":resul
            });
        }else{
            res.json({
                "res":"error",
                "data":"error no llego los datos"
            });
        }
    }

 

module.exports = { NewSale , DeleteSale, AddSDetail, UpdateSales , getSales, GetSalesDetai};
