const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();
module.exports = class EmployesModel {
  async Show() {
    try {
      var query = `select * from employe where state = 1`;
      const datos = await bd.query(query);
      return datos;
    } catch (e) {
      return e.code;
    }
  }

  async Create(data,img) {
    try {
      var query = `INSERT INTO employe VALUES (${0},${data.name},${data.last_name}, ${data.age},${data.privilege},${data.user},${data.password},1,${img},${data.office})`;
      const datos = await bd.query(query);
      if (datos != "") {
        logController.AddLog(
          data.id_employe,
          `Registró a un nuevo empleado (${data.name} ${data.last_name})`
        );
      } else {
        return "error";
      }
      return datos;
    } catch (e) {
      return e.code;
    }
  }

  
  async Update(data) {
    //Update
  }

  async Delete(data) {
    //ELiminar
  }
};
