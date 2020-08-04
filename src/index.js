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

const mysqlDump = require('mysql-backup');
const fs = require('fs');
const cron = require('node-cron');
var a = 0;
cron.schedule('10 13 * * 7-7',() => {
    
    mysqlDump({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pos_system',
        tables:['customer','product','presentation','logs'], // only these tables
        where: {'customer': '','product':'','presentation':'','logs':''}, // Only test players with id < 1000
        ifNotExist:true, // Create table if not exist
    }).then(dump => {
        
        fs.writeFileSync('./backup/test.sql', dump); // Create data.sql file with dump result
    
    })
})
 
