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

const GetCliente = async (req,res) => {
    
    const id = req.params.id;
    console.log(id);
    resultado = await CM.getCliente(id);
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

const GetCustomers = async (req,res) => {

    resultado = await CM.getClientes();
    if(resultado != 'error'){
        res.json({
            "res":"ok",
            "data":resultado
        });
    }else{
        res.json({
            "res":"error",
            "data":"error en la base de datos"
        });
    }
}

const CreateCustomer = async (req,res) => {
            console.log(req.body);
            var data = req.body;
            if(data == ""){
                res.json({
                    "res":"error",
                "data":"error"
                });
            }else{
                let {name,cedula,nickname,debito,telefono} = req.body;
                let resul = await CM.CreateCustomer(name.toUpperCase(),nickname.toUpperCase(),debito,telefono,cedula);
                console.log(resul);
                if(resul == true){
                    res.json({
                        'res':"ok",//significa que todo esta bien {se inserto el registro}
                        "data":""
                    });
                    console.log(1);
                }else if(resul == false){
                    console.log(2);
                    res.json({
                        'res':"false", //significa que hay un registro con esa cedula
                        "data":""
                    });
                }else{
                    console.log(3);
                    res.json({
                        'res':"error", //significa que hubo un error de la base de datos
                        "data":"intente nuevamente"
                    });
                }
               

            }
}

const UpdateDebitController = async (req,res) => {

    var data = req.body;
     let resultado = await CM.UpdateDebit(data.id_customer, data.total_pay);
    if(resultado) {
        res.json({
            "res":"ok"
        });
    }else{
        res.json({
            "res":"error"
        });
    }
    
}

module.exports = {UpdateDebitController,buscarC, GetCustomers, GetCliente, CreateCustomer};