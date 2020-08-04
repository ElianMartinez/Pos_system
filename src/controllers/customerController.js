const CustomerM = require("../models/customerModel");
const CM = new CustomerM();

const buscarC = async (req,res) => {
    
    const name = req.params.name;
    
    resultado = await CM.BuscarClientes(name);
    if(resultado != 'error'){
        res.json({
            "res":"ok",
            "data":resultado
        });
    }else{
        res.json({
            "res":"error",
            "data":""
        });
    }
    
    
}

module.exports = {buscarC};