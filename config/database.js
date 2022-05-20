const mysql = require("mysql");

// config
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bootcamp",
  multipleStatements: true,
});

// database connection
conn.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = conn;
