const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const e = require("express");
const logController = new LogController();

module.exports = class ProductModel {
  async ShowForImage(image) {
    var query = `select * from product where name = "${image}"`;
    try {
      let resultado = await bd.query(query);
      return resultado;
    } catch (e) {
      return e;
    }
  }
  async verificar_name(datas){
    var query = `select * from product where name = "${datas.name}"`;
    try {
      let resultado = await bd.query(query);
      return resultado;
    } catch (e) {
      return e;
    }
   }

  async CreateProd(data) {
    var query = `CALL add_products("${data.name}",${data.id_branch_office})`;
   var wer = await this.verificar_name(data);
     if(wer.length == 0){
    try {
      await bd.query(query);
      
      logController.AddLog(
        data.id_employe,
        `Regristró un nuevo Producto (${data.name})`
      );
      return "true";
    } catch (e) {
      return e;
    }

  }else{
      return "hay otro";
  }
  }

  async verificar_j2(data) {
    var sql = `select * from presentation p where id_product = ${data.id_producto} and num_hierarchy = ${data.num_hers} and bar_code != ${data.bar_co} and state = 1`;
    try {
      let resp = await bd.query(sql);

      return resp;
    } catch (e) {
      return e;
    }
  }

  async verificar_j(data) {
    var sql = `select * from presentation p where id_product = ${data.id_producto} and num_hierarchy = ${data.num_hers} and state = 1`;
    try {
      let resp = await bd.query(sql);

      return resp;
    } catch (e) {
      return e;
    }
  }

  async Verificacion_1(data) {
    try {
      var sql = `select p.state as state, p.cantidad, p.format , p.price_sales_detail, p.price_sales_mayor, p.image, p2.name as name from presentation p, product p2 where p.id_product = p2.id_product and p.bar_code = '${data.bar_co}' and p.state = 1`;
      let resultados = await bd.query(sql);
    
      return resultados;
    } catch (e) {
      return e;
    }
  }

  async EditPrese(data) {
    var query;
    if(data.image != null){
     query = `CALL edit_presentacion_con(${data.id_presen}, ${data.num_hers}, '${data.format}' , ${data.no_unidad} , ${data.cantidad} , ${data.price_s_d} ,  ${data.price_s_mayor} ,${data.price_sho}, ${data.limit_stock} , '${data.bar_co}','${data.image}')`;
    }else{
      query = `CALL edit_presentacion_sin(${data.id_presen}, ${data.num_hers}, '${data.format}' , ${data.no_unidad} , ${data.cantidad} , ${data.price_s_d} ,  ${data.price_s_mayor} ,${data.price_sho}, ${data.limit_stock} , '${data.bar_co}')`;
    }
    try {
      //verificar si no se repite la jerarquia
      var ve = await this.verificar_j2(data);
     
      if (ve.length > 0) {
        return "hay otro";
      } else {           
          await bd.query(query);
          //insertar
          logController.AddLog(
            data.id_employe,
            `Edito una Presentacion de Producto (${data.format})`
          );
          return "true";
      }
    } catch (e) {
      return e;
    }
  }


  async CreatePrese(data) {
    var query = `CALL add_presentacion (${data.id_producto}, ${data.num_hers}, '${data.format}' , ${data.no_unidad} , ${data.cantidad} , ${data.price_sho} , ${data.price_s_d}  , ${data.price_s_mayor}  ,'${data.image}' , ${data.limit_stock} , '${data.bar_co}' )`;
    try {
      //verificar si no se repite la jerarquia
      var ve = await this.verificar_j(data);

      if (ve.length > 0) {
        return "hay otro";
      } else {
        var re = await this.Verificacion_1(data);
        
        if (re.length > 0) {
          return re;
        } else {
          await bd.query(query);
          //insertar
          logController.AddLog(
            data.id_employe,
            `Regristró una nueva Presentacion de Producto (${data.format})`
          );
          return "true";
        }
      }
    } catch (e) {
      return e;
    }
  }



  async buscar(barcode){
    var sql = `select p.state as state, p.cantidad, p.format , p.price_sales_detail, p.price_sales_mayor, p.image, p2.name as name from presentation p, product p2 where p.id_product = p2.id_product and p.bar_code = '${barcode}' and p.state = 1`;
    try{
      var resp = await bd.query(sql);
    }catch(e){
      return e;
    }
  }

  async Update(data) {
    //Update
  }

  async Delete(data) {
    //ELiminar
  }



  async ediProduc(data) {
    var query = `CALL edit_product(${data.id_producto},"${data.name}")`;
   var wer = await this.verificar_name(data);
     if(wer.length == 0){
    try {
      await bd.query(query);
      
      logController.AddLog(
        data.id_employe,
        `Editó un Producto (${data.name})`
      );
      return "true";
    } catch (e) {
      return e;
    }

  }else{
      return "hay otro";
  }
  }

  async MostrarPresent(data){
    try{
      var sql = `call buscarPresent(${data}) `;
      var resul = await bd.query(sql);
     
      return resul;

    }catch(e){
      return e;
    }
  }

  async BuscarPresent(data){
    try{
      var sql = `call buscar_codigo('${data}')`;
      var resul = await bd.query(sql);
     
      return resul;

    }catch(e){
      return e;
    }
  }

  async BuscarProducts(data,cont){
    try{
      var resul;
      var sql;
      if(cont == 1){
        sql = "Select * from  product where state = 1";
      }else{
        if(data == null){
          sql = "Select p.image, p2.name , p.format,p.num_hierarchy, p.no_unit, p.cantidad, p.price_shopping, p.price_sales_detail, p.price_sales_mayor, p.limit_unit, p.bar_code, p.id_product from presentation p, product p2 where p.id_product = p2.id_product and p.state = 1";
         resul = await bd.query(sql);
       }else{
         sql = ` Select   p2.name as Nombre, p.format as Presentacion ,p.num_hierarchy as jerarquia, p.no_unit, p.cantidad as Cantidad, p.price_shopping as 'Precio Compra', p.price_sales_detail as 'Precio Colmado', p.price_sales_mayor as 'Precio Venta Mayor', p.limit_unit, p.image as Imagen, p.bar_code, p.id_product, p.id_presentation 
        from presentation p, product p2 where ${data} and p.id_product = p2.id_product and p.state =1 order by p2.name asc `;
       }
      }
        resul = await bd.query(sql);
      return resul;

    }catch(e){
      return e;
    }
  }




};

