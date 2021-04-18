//import mysql pacakge
const mysql = require('mysql');
let connection;
//create the connection needs for the heroku app
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  //create the connection needs for the localhost
  connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "090981",
    database: "burgers_db"
  });
}
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//export the connection
module.exports = connection;