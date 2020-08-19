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
            var rpta;
            var query = `call deleteVenta( '${data}') `;
            const datos = await bd.query(query);
            rpta = true;            
        }catch(err){
            rpta = err;
        }
        
        return rpta;
    }

    async AddSalesDetail(data){
       var rpta;
        try {
            var rpta;
            var query = `call AddSaleDetail('${data.id_v}','${data.id_p}',${data.cantidad},${data.descuento}) `;
            const datos = await bd.query(query);
            rpta = true;  
        }catch(err){
            rpta = err;
        }
    }

    async UpdateSale(data){
        var rpta;
        try{
            resultado = await bd.query(`call  UpdateSales('${data.code_sales}',${data.total_ganancias},${data.total_pay}, ${data.id_payment_method}, ${data.id_customer})`);
            rpta = true;
        }catch(err){
            rpta = err;
        }
    }
}