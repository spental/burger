const mysql = require('mysql');
const chalk = require('chalk');
let connection;
//Heroku connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  //localhost connection
  connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "myP@ssword",
    database: "burgers_db"
  });
}
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(chalk.bgGreenBright.black("connected as id " + connection.threadId));
});

module.exports = connection;