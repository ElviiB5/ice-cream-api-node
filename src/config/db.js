const mysql = require("mysql2");

var connection = mysql.createPool({
  host: process.env.MYSQLDB_HOST,
  user: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_NAME,
  port: process.env.MYSQLDB_PORT
});

module.exports = connection;