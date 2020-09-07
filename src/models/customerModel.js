const db = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();
module.exports = class CustomerModel {
    async BuscarClientes(name){
        if(name != ""){
        const sql = `call BuscarClientes("${name}")`;
        try{
            let result = await db.query(sql);
            return result;
        }catch(err){
            console.log(err);
        }
    }else{
        return "error";
    }
    }
    async getClientes(){
        const sql = `select * from customer where state = 1 and id_customer > 1 limit 150`;
        try{
            let result = await db.query(sql);
            return result;
        }catch(err){
            return 'error';
        }
    }
    async getCliente(id){
        const sql = `select * from customer where state = 1 and id_customer = ${id}`;
        try{
            let result = await db.query(sql);
            return result;
        }catch(err){
            console.log(err);
            return 'error';
        }
    }
    async VerificarCedular(cedula){
        var sql = `select * from customer c where c.cedula = '${cedula}'`;
        try{    
            let result = await db.query(sql);
           
            if(result.length > 0){
                return true;
            }else{
                return false;
            }
        }catch(err){
           
        }
    }

    async CreateCustomer(name,nick,debit,phone,cedula){
        try{
           let valor = await this.VerificarCedular(cedula);
           
            if(valor == false){
                let resul = await db.query(`call CreateClientes('${name}','${nick}','${cedula}','${phone}',${parseFloat(debit)})`);
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            return "error";
        }
        
    }

    async UpdateDebit(id,debit){
        var sql = `call pos_system.updateDebit(${debit},${id});`;
        try{
                let result = await db.query(sql);
                if(result.affectedRows > 0){
                    return true;
                }else{
                    return false;
                }
        }catch(err){
            return err;
        }
    }

  
}