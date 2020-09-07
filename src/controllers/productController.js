var myip = require("quick-local-ip");
const ProductModel = require("../models/productModel");
const productModel = new ProductModel();
const { v4: uuidv4 } = require("uuid");
const path = require("path");


const CreateProduc = async (req, res) => {
  if (req.body != null) {
    
    //entrada de datos
    var dataT = JSON.parse(req.body.data);
    //convercion de datos al objeto
    var product = new Object();
    product.name = dataT.Name;
    product.id_employe = dataT.Id_employe;
    product.id_branch_office = dataT.Id_branch_office;

    
    //Guardando en base de datos

    //
    var resul = await productModel.CreateProd(product);
   
    if (resul == "true") {
      //buscar ese producto
      let datosAenviar = await productModel.ShowForImage(product.name);
      
      res.json({
        res: "true",
        data: datosAenviar,
      });
    } else if(resul == "hay otro"){
      res.json({
        res: "false",
        data: "existe un producto con ese nombre",
      });
    }else{
      res.json({
        res: "error",
        data: "error database",
      });
    }

    //Resultaodo
  } else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
};


const CreatePresenta = async (req, res) => {
  if (req.body != null) {

  
    //entrada de datos
    var dataT = JSON.parse(req.body.data);
    //convercion de datos al objeto
    var product = new Object();
    product.id_producto = dataT.id_producto;
    product.id_employe = dataT.id_employe;
    product.num_hers = dataT.num_herarquia;
    product.format = dataT.format;
    product.no_unidad = dataT.no_unidades;
    product.cantidad = dataT.cantidad;
    product.price_sho = dataT.price_compra;
    product.price_s_d = dataT.price_ven_d;
    product.price_s_mayor = dataT.price_venta_mayor;
    product.limit_stock = dataT.limite_stock;
    product.bar_co = dataT.codigo_barra;
   

    //trabajar la imagen
    if (req.files != null) {
      let sampleFile = req.files.file;

      let nombrefile = uuidv4() + path.extname(sampleFile.name);
      //ruta donde se guarda la imagen
      sampleFile.mv(`./src/public/images/presentations/${nombrefile}`);
      //nombre de la imagen en la bd
      let image = `files/images/presentations/${nombrefile}`;

      product.image = image;
    }else{
      product.image = "files/images/presentations/product.png";
    }


    //Guardando en base de datos

    //
    var resul = await productModel.CreatePrese(product);
    console.log(resul);
    if (resul == "true") {
      //buscar ese producto
      res.json({
        res: "true",
        data: resul,
      });
    } else if (resul == "hay otro"){
      res.json({
        res: "false",
        data: "hay otro elemento con esa misma jerarquia",
      });
    }else if(resul[0].state == 1){
      res.json({
        res: "codigoAdd",
        data: resul,
      });
    }
    else{
      res.json({
        res: "error",
        data: "error database",
      });
    }

    //Resultaodo
  } else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
};

const EditPresenta = async (req, res) => {
  if (req.body != null) {


    //entrada de datos
    var dataT = JSON.parse(req.body.data);
    //convercion de datos al objeto
    var product = new Object();
    product.id_producto = dataT.id_producto;
    product.id_employe = dataT.id_employe;
    product.num_hers = dataT.num_herarquia;
    product.format = dataT.format;
    product.no_unidad = dataT.no_unidades;
    product.cantidad = dataT.cantidad;
    product.price_sho = dataT.price_compra;
    product.price_s_d = dataT.price_ven_d;
    product.price_s_mayor = dataT.price_venta_mayor;
    product.limit_stock = dataT.limite_stock;
    product.bar_co = dataT.codigo_barra;
    product.id_presen = dataT.Id_Presentation;

    //trabajar la imagen
    if (req.files != null) {
      let sampleFile = req.files.file;

      let nombrefile = uuidv4() + path.extname(sampleFile.name);
      //ruta donde se guarda la imagen
      sampleFile.mv(`./src/public/images/presentations/${nombrefile}`);
      //nombre de la imagen en la bd
      let image = `files/images/presentations/${nombrefile}`;

      product.image = image;
    }

    //Guardando en base de datos

    var resul = await productModel.EditPrese(product);
    console.log(resul);
    if (resul == "true") {
      //buscar ese producto
      res.json({
        res: "true",
        data: resul,
      });
    } else if (resul == "hay otro"){
      res.json({
        res: "false",
        data: "hay otro elemento con esa misma jerarquia",
      });
    }else if(resul[0].state == 1){
      res.json({
        res: "codigoAdd",
        data: resul,
      });
    }
    else{
      res.json({
        res: "error",
        data: "error database",
      });
    }

    //Resultaodo
  } else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
};




const editProduct = async (req,res) =>{
  if (req.body != null) {
    
    //entrada de datos
    var dataT = JSON.parse(req.body.data);
    //convercion de datos al objeto
    var product = new Object();
    product.name = dataT.Name;
    product.id_employe = dataT.Id_employe;
    product.id_producto = dataT.Id_Product;
    

    
    //Guardando en base de datos

    //
    var resul = await productModel.ediProduc(product);
   
    if (resul == "true") {
      //buscar ese producto
      let datosAenviar = await productModel.ShowForImage(product.name);
      
      res.json({
        res: "true",
        data: datosAenviar,
      });
    } else if(resul == "hay otro"){
      res.json({
        res: "false",
        data: "existe un producto con ese nombre",
      });
    }else{
      res.json({
        res: "error",
        data: "error database",
      });
    }

    //Resultaodo
  } else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
};


const ShowPre = async (req,res) => {
  const id = req.params.id;

  if(id != null){
    var resul = await productModel.MostrarPresent(id);
   
     res.json({
       res:"ok",
       data:resul
     });

  }else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
}


const buscarProducts = async (req,res) => {
  const name = req.params.name;
  var resul;
  if(name == "all"){
    
    resul = await productModel.BuscarProducts("",1);
  }else{
  if(name != null){
    const arr = name.split(' ');
    var string1 = "";
    var cont = 0;
    while(cont < arr.length){
      if(cont > 0){
        string1 = string1 + "and p2.name like '%"+arr[cont]+"%' ";
      }else{
        string1 = string1 + "p2.name like '%"+arr[cont]+"%' ";

      }
      cont++;
    }
     resul = await productModel.BuscarProducts(string1,2);
    }else {
      res.json({
        res: "No llego",
        data: "aqui no hay datos",
      });
    }
}
 
     res.json({
       res:"ok",
       data:resul
     });
}

const ShowProductosBycode = async (req,res) => {
  const codigo = req.params.codigo;

  if(codigo != null){
    
    var resul = await productModel.BuscarPresent(codigo);
   if(resul[0] == null || resul[0] == ""){
        res.json({
       res:"false",
       data:"No existe ese codigo de barras"
     });
   }else{
       res.json({
       res:"true",
       data:resul
     });
   }
 

    
  }else {
    res.json({
      res: "No llego",
      data: "aqui no hay datos",
    });
  }
}




module.exports = { CreateProduc, CreatePresenta, editProduct,ShowPre,buscarProducts, EditPresenta, ShowProductosBycode};


