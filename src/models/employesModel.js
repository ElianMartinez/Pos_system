const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();
module.exports = class EmployesModel
{

    async Show()
    {
        var query = `select * from employe where state = 1`;
        const datos = await bd.query(query);
        return datos;
    }

    async Create(data)
    {
        var query = `INSERT INTO employe VALUES ("0",${data.name},${data.last_name}, ${data.age},${data.privilege},${data.user},${data.password},1,${data.image},${data.office})`;
        const datos = await bd.query(query);
        if(datos != ""){ 
            logController.AddLog(data.id_employe,`Registró a  ${data.name} ${data.last_name}`);
        }
        return datos;

    }

    async Update(data)
    {
       //Update

    }

    async Delete(data)
    {

    //ELiminar

    }

}