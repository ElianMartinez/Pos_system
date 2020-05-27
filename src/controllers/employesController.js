const EmployesModel = require("../models/employesModel");
const employesModel = new EmployesModel();


const show = async (req, res) => {

    const datos = await employesModel.Show();
    res.json({
        res:"ok",
        data:datos
    });
    
}
module.exports = { show };
