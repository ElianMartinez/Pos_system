const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const e = require("express");
const logController = new LogController();
module.exports = class SalesModel
{
    async VERIFIC(code){
        var rpta;
        var sql = `select * from sales where code_sale = ${code}`;
        var resp = await bd.query(sql);
        
        if(resp.length > 0){
            rpta = false;
        }else{
            rpta = true;
        }
        return rpta;
    }
    async NewSales(data)
    {
        try{
            var rpta;
            let  valor = await this.VERIFIC(data.code_sales);
            if(valor){
                var query = `call AgregarVenta('${data.code_sales}', ${data.id_employe},${data.id_type_sale}, ${data.id_branch_office}) `;
                const datos = await bd.query(query);
                rpta = true;
                
                if(datos != ""){ 
                    logController.AddLog(data.id_employe,"Se registro una venta");
                }
            }else{
                rpta = false;
            }
        }catch(err){
            rpta = err;
        }
        
        return rpta;
    }

    async deleteSales(data)
    {
        try{

            var query = `call deleteVenta( '${data}') `;
            const datos = await bd.query(query);
            return true;           
        }catch(err){
            return err;
        }
    }
    async AddSalesDetail(data){
        try {
            var rpta;
            var query = `call AddSaleDetail('${data.id_v}','${data.id_p}',${data.cantidad},${data.descuento}) `;
            const datos = await bd.query(query);
            rpta = true;  
        }catch(err){
            
            rpta = err;
        }
        return rpta;
    }

    async UpdateSale(data){
        var rpta;
        try{
            resultado = await bd.query(`call  UpdateSales('${data.code_sales}',${data.total_ganancias},${data.total_pay}, ${data.id_payment_method}, ${data.id_customer})`);
            rpta = true;
        }catch(err){
            rpta = err;
        }
        return rpta;
    }

    async GetSales(id){
        let sql = `select s.code_sale as code_sales, s.id_type_sale as type ,s.id_sale,s.date , s.time , s.total_pay, pm.name , pm.id_payment_method from sales s inner join payment_method pm ON s.id_payment_method = pm .id_payment_method where s.state_sales = 1 and s.id_customer = ${id} order by concat(date," ",time) desc limit 150 `;
        try {
                let resultados = await bd.query(sql);
                return resultados;
                
        } catch(err){
            console.log(err);
        }
    }

    async GetSalesDetail(id_sales, id_type){
            let sql; 
          if(id_type == 1){
    sql =  `select p2.name as nombre, sd.stock as cantidad ,sd.discount as descuento, p.price_sales_detail as precio, ((sd.stock * p.price_sales_detail) - sd.discount)  as Importe from sales_detail sd inner join presentation p on sd.id_presentation = p.id_presentation inner join sales s on sd.id_sale = s.id_sale inner join product p2 on p.id_product = p2.id_product where sd.id_sale = ${id_sales}`; 

          }else if(id_type == 2){
    sql =  `select p2.name as nombre, sd.stock as cantidad ,sd.discount as descuento, p.price_sales_mayor as precio, ((sd.stock * p.price_sales_mayor ) - sd.discount)  as Importe 
    from sales_detail sd inner join presentation p on sd.id_presentation = p.id_presentation inner join sales s on sd.id_sale = s.id_sale inner join product p2 on p.id_product = p2.id_product where sd.id_sale = ${id_sales}`; 
          }
          try {
                let resul = await bd.query(sql);
                return resul;
          }catch(err){
                return err;
          }


    }  
}

// [0] = Foto
// [1] = Nombre
// [2] = Presenta
// [3] = PreColmado
// [4] = PreMayor
// [5] = PreCompra
// [6] = Id_Product
// [7] = Id_Present
// [8] = img
// // [9] = Bar_Code
// data.data[10].jerarquia.ToString(), 
// data.data[11].no_unit.ToString(), 
// data.data[12].Cantidad.ToString(), 
// data.data[3].limit_unit.ToString()