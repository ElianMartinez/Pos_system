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

}