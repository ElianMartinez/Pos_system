const LoginModel = require("../models/loginModel");
const loginModel = new LoginModel();

const login = async (req, res) => {

 const { User, Pass } = req.body;
 
  if (User != undefined && Pass != undefined) {

    const datos = await loginModel.loginTry(User,Pass);
    
    if(datos != ""){
        res.json({
            "res":"true",
            data: datos
        });
       
    }else{
        res.json({
            "res":"false",
            data: ""
        });
    }

  } else {
    console.log("No hay datos");
    res.json({ res: "porfavor asigne variables",data : "" });
  }
};

module.exports = { login };
