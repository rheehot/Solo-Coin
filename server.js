const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require('./db-config.json');

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});


// DB Connection
db.connect((error) => {
  if(error) {
    console.log('DB connection failed.....');
    throw error;
  } else {
    console.log('DB connection succeeded!!!');
  }
});

app.get('/api', (req, res) => {
  db.query('SELECT * FROM users', (err, rows, fields) => {
    if(err) {
      console.log('Query is failed....');
    } else {
      console.log('Query is succeeded!!!');
      res.send(rows);
    }
  });
});


// Server Listening
const port = 5000;
app.listen(port, () => console.log(`Server listening to ${port}`));