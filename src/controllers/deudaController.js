const DModel = require('../models/deudasModels');
const dModel = new DModel();

const CreateDeuda = async (req,res) => {
    const data = req.body;
    let resultado = await dModel.CreateDeuda(data);
    console.log(resultado);
     if(resultado){
        res.json({
            "res":"ok"
        });
    }else{
        res.json({
            "res":"false"
        });
    }
}

const getDeuda = async (req,res) => {
    let id = req.params.id;
    if(id > 0){
        let resul = await dModel.GetDeuda(id);
        console.log(resul)
      if(resul[0].deuda != null) {
        res.json({
            "res":"ok",
            "data":resul[0].deuda
        });
      }else if (resul[0].deuda == null){
        res.json({
            "res":"ok",
            "data":0
        });
      }else{
        res.json({
            "res":"error",
            "data":"error"
        });
      }
        
    }else{

    }
}

const UpdateDeuda = async (req,res) => {
    var id = req.params.id; 
    if(id != ''){
        const respuesta = await dModel.UpdateDeuda(id);
        if(respuesta)
        {
            res.json({
                "res":"ok",
                "data":"excelente"
            });
        }else{
            res.json({
                "res":"error",
                "data":""
            });
        
        }
    }
}
module.exports = {CreateDeuda,getDeuda, UpdateDeuda};
