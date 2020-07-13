const EmployesModel = require("../models/employesModel");
const employesModel = new EmployesModel();

const show = async (req, res) => {
  const datos = await employesModel.Show();
  if (datos == "ECONNREFUSED") {
    res.json({
      res: "null",
      data: datos,
    });
  } else {
    res.json({
      res: "ok",
      data: datos,
    });
  }
};

const create = async (req, res) => {
  //agarro los datos
  var datos = req.body;
 console.log(datos);

    
//   //paso los datos por la funcion
//    //const resultado = await employesModel.Create(datos);

//    if(resultado == "ECONNREFUSED"){

//    }else{
//        if(resultado == "error"){
//             //aqui dio error la base de datos
//        }else{

//             res.json({
//              res: "ok",
//              data: resultado,
//             });
//        }
    
//    }

  //respuesta
  res.json({
    res: "ok",
    data: "datos",
   });


};



module.exports = { show, create };
