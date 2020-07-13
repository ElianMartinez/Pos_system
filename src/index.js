const express =  require('express');
const fileUpload = require('express-fileupload');


const app = express();


//settings 
app.set("port", 5500);


//Middlewares 
app.use(express.json());
app.use(fileUpload());
    
    

//Routes 
app.use("/files",express.static(__dirname + '/public'));
app.use(require('./routes/route'));

//Starting server
app.listen(app.get('port'), () => {

    console.log("server on port 5500");
    
});
