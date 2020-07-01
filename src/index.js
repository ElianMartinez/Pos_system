const express =  require('express');
const fileUpload = require('express-fileupload')
const app = express();


//settings 
app.set("port", process.env.PORT || 3000);


//Middlewares 
app.use(express.json());
app.use(fileUpload());

//Routes 
app.use(require('./routes/route'));

//Starting server
app.listen(app.get('port'), () => {
    console.log("server on port 3000");
});
