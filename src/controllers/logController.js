const db = require("../DB/database");


module.exports =  class LogController 
{
    AddLog(id,accion){
        const query = `CALL AgregarLog(${id},'${accion}')`;
        db.query(query);
    }
}