const express = require('express');
const bodyParser = require("body-parser");
const sql = require("mssql");
const port = 3000;
const app = express();
app.use(bodyParser.json()); 

app.listen(port);
const db = require('./db.js');
console.log("server started on : "+ port);

app.get('/products', function(req, res) {
  const data = {};
  const name = req.query.name;

  db.query("SELECT name, quantity FROM products WHERE name = '" + name + "'" , (err, rows, fields) => {
    if(rows.length != 0){
      data.name = rows[0].name;
      data.quantity = rows[0].quantity;
      res.json(data);
    } else {
      data.error = true;
      res.json(data);
    }
  });		
});


