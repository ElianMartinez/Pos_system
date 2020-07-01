const LoginModel = require("../models/loginModel");
const loginModel = new LoginModel();


const login = async (req, res) => {
 const { user, pass } = req.body;
  
  if (user != undefined && pass != undefined) {
   
    const datos = await loginModel.loginTry(user,pass);
    
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
