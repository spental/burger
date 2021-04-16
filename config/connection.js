/**const mysql = require('mysql');

var config = {
  port: 3306
  host:'us-cdbr-iron-east-05.cleardb.net' || 'localhost',
  user: 'bb6450110835d3' || 'root',
  password: '8c513618' || '',
  database: 'b8fd4a5101137fa' || 'burgers_db'
};

var pool = mysql.createPool(config);

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT * FROM burgers', function (error, results, fields) {
    // And done with the connection.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});


module.exports = pool;
**/

var mysql = require("mysql");
/**
// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
  },

  // clearDB
  jawsDB: {
    port: 3306,
    host: "us-cdbr-east.cleardb.com",
    user: "adffdadf2341",
    password: "adf4234",
    database: "heroku_db"
  }
}; **/

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;