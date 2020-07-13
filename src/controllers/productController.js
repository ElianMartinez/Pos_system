var myip = require('quick-local-ip');
const ProductModel = require("../models/productModel");
const productModel = new ProductModel();
const { v4: uuidv4 } = require('uuid');
var path = require('path')



const CreateProduc = async (req,res) => {
    if(req.body != null ){
        //entrada de datos
       var dataT = JSON.parse(req.body.data);
       //convercion de datos al objeto
        var product = new Object();
        product.name = dataT.Name;
        product.id_employe = dataT.Id_employe;
        product.image = dataT.Image;
        product.id_branch_office = dataT.Id_branch_office;
        //trabajar la imagen
        let sampleFile = req.files.file;

       let nombrefile = uuidv4()+path.extname(sampleFile.name);
        //ruta donde se guarda la imagen
        sampleFile.mv(`./src/public/images/products/${nombrefile}`);
         //nombre de la imagen en la bd
        let image = `/files/images/products/${nombrefile}`;

        product.image = image;

        //Guardando en base de datos
        
      //  
       var resul = await productModel.Create(product);
            
        if(resul == "true"){
            //buscar ese producto
            let datosAenviar = await productModel.ShowForImage(image);
            
                res.json({
                    "res":"true",
                    data:datosAenviar
                });
            }
             else{
                res.json({
                    "res":"false",
                     data:"error database"       
                 });
             }

        //Resultaodo

    }else{
        res.json({
            "res":"No llego",
            data: "aqui no hay datos"
        });
    }
}

module.exports = { CreateProduc };
