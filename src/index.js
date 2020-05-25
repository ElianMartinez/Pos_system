const express =  require('express');
const app = express();


//settings 
app.set("port", process.env.PORT || 3000);

//Middlewares 
app.use(express.json());


//Routes 
app.use(require('./routes/product_category'));
app.use(require('./routes/login'));

//Starting server
app.listen(app.get('port'), () => {
    console.log("server on port 3000");
});
