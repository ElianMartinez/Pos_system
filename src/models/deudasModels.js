const db = require("../DB/database");
module.exports = class DeudaModel {
    async CreateDeuda(data){
        let sql = `Call ADD_Deudad(${data.Id_customer},'${data.CODE}',${data.amount})`;
        console.log(sql);    
        let resul = await db.query(sql);
            console.log(resul);
            if(resul.affectedRows > 0){
                return true;
            }else{
                return false;
            }
        }catch(err){
            // console.log(err);
            return err;
        }

        async GetDeuda(id){
            const sql = `select sum(import) as deuda from deuda d where id_customer = ${id} and pay = 0`;
            try{
                let resul = await db.query(sql);
                return resul;

            }catch(error){
                return error;
            }
        }
    }    