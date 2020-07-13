const bd = require("../DB/database");
const LogController = require("../controllers/logController");
const logController = new LogController();

module.exports = class ProductModel {
  async ShowForImage(image) {
    var query = `select * from product where image = "${image}"`;
    try {
      let resultado = await bd.query(query);
      return resultado;
    } catch (e) {
      console.log(e);
    }
  }

  async Create(data) {
    var query = `CALL add_product("${data.name}","${data.image}",${data.id_branch_office})`;
    try {
      await bd.query(query);
      logController.AddLog(
        data.id_employe,
        `Regristró un nuevo Producto (${data.name})`
      );
      return "true";
    } catch (e) {
      return e;
    }
  }

  async Update(data) {
    //Update
  }

  async Delete(data) {
    //ELiminar
  }
};
