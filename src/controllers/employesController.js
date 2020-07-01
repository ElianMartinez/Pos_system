const EmployesModel = require("../models/employesModel");
const employesModel = new EmployesModel();


const show = async (req, res) => {

    const datos = await employesModel.Show();
    res.json({
        res:"ok",
        data:datos
    });
    
}

const create = (req , res) => {
  
    //agarro los datos 
  const dato = req.body;
  console.log(dato);


  //paso los datos por la funcion 
 // const datos = await employesModel.Create();


  //respuesta
  res.json({
    res:"ok",
    data:dato
});

  


} 


module.exports = { show, create };
