const db = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();

module.exports = class CustomerModel {
    async BuscarClientes(name){
        const sql = `call BuscarClientes("${name}")`;
        try{
            let result = await db.query(sql);
            return result;
        }catch(err){
            return err;
        }
    }
}