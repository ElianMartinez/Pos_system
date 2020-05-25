const mysql = require('mysql');
var host = "localhost";
var user = "root";
var pass = "";
var db = "pos_system";

const mysqlConnection = mysql.createConnection({
    host : host,
    user: user,
    password: pass,
    database : db
});
try{
mysqlConnection.connect( (err) => {
    if(err){
        console.log(err.sqlMessage);
        return;
    }else{
        console.log('Db is connected');
    }
});

}
catch(ee){
    console.log(ee);
}


module.exports = mysqlConnection;