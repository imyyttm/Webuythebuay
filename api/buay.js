var express = require('express')
var cors = require('cors')
var ejs = require('ejs');
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var orderID =1

app.use(cors())
app.use(express.json())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'webuythebuaydb',
  port : '3306'
});
 
connection.connect((err) => {
  if(err) {
      console.log('Error connecting to MySQL database = ', err)
      return;
  }
  console.log('MySQL successfully connected!');
})

app.post('/Checkout',function(req,res){
  //เชื่อมต่อฐานข้อมูล
  var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'webuythebuaydb'
  });
  conn.connect((err)=>{
    if(err){
      console.log(err)
    }
    else{
      //จัดการข้อมูลจากตะกร้า
      var cart = req.body
      var SID ="Stu00011111"
      var OrderID=orderID;
      var Status ="waiting"
      for(let i=0;i<cart.length;i++){
        var CID = cart[i].CourseID;
        var cost = cart[i].Course_price;
        var DETAIL= SID + " ซื้อ " + cart[i].Course_name
        var DATE = new Date()
        var TIME =""
        //insert ข้อมูลลงในฐานข้อมูล
        var query = "INSERT INTO buycourse (Student_buyID,Course_buyID,OrderID,Buy_detail,Total_price,Buy_date,Buy_status) VALUES ?";
        var values = [[SID,CID,OrderID,DETAIL,cost,DATE,Status]];
        conn.query(query,[values],(err,result)=>{})
      }
    }
  })
})
app.get('/Checkout',function(req,res,next){
  res.render('/Checkout')
})

app.get('/mycourse', function (req, res, next) {
  connection.query("SELECT B.Student_buyID,B.Course_buyID,B.OrderID,B.Buy_detail,B.Total_price,B.Buy_date,B.Buy_status,C.Image FROM buycourse as B, course as C  WHERE (Student_buyID = 'Stu0001000') AND B.Course_buyID=C.CourseID",
  function (error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
})

app.get('/course', function (req, res, next) {
  connection.query("SELECT * FROM course",
  function (error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
})

app.get('/recommandcourse', function (req, res, next) {
  connection.query("SELECT * FROM course LIMIT 3",
  function (error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
})

app.get('/buycourse', function (req, res, next) {
  connection.query("SELECT * FROM buycourse ORDER BY OrderID",
  function (error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
})

app.listen(5000, jsonParser, function () {
  console.log('CORS-enabled web server listening on port 5000')
})