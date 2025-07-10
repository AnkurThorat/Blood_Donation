// database.js
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({
  path: "./env",
});

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ankur",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database...");
});

module.exports = db;
