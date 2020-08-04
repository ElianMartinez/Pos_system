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



  //respuesta
  res.json({
    res: "ok",
    data: "datos",
   });


};



module.exports = { show, create };
