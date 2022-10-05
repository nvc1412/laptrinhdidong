const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodejs_api",
});
db.connect();
//xu ly get
app.get("/data", (req, res) => {
  var sql = "select * from user";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result); // gui ket qua cho react
  });
});
//xu ly post (insert)
app.post("/data", (req, res) => {
  console.log(req.body);
  //tham so truyen
  var data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  };
  var sql = "insert into user SET ?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      status: "Du lieu da gui thanh cong",
      id: null,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    });
  });
});
app.listen(3001, "192.168.180.188", () => {
  console.log("server dang chay o cong 3001");
});
