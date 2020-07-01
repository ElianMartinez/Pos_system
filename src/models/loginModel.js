const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();
module.exports = class LoginModel
{

    async loginTry(user,pass)
    {
        var query = `select * from employe where state = 1 and user = "${user}" and password = ${pass}`;
        const datos = await bd.query(query);
        if(datos != ""){ 
            logController.AddLog(datos[0].id_employe,"Inicio de Sección");
        }
        
        return datos;

    }

}