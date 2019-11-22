const express = require('express');
const app = express();
const mysql = require('mysql');
const db = require('./db-config.json');

const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
});

connection.connect((error) => {
  if(error) {
    throw error;
  } else {
    connection.query('SELECT * FROM users', (error, rows, fields) => {
      console.log(rows);
    });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server listening to ${port}`));