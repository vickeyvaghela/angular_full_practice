const models = require('express').Router();
const sql = require("mssql");
const jwt = require('jsonwebtoken');
const config = { user: process.env.DB_USER, password: process.env.DB_PASSWORD, server: process.env.DB_SERVER, database: process.env.DB_DATABASE,options:{encrypt:false}};

models.get('/', (req, res) => {
  res.send('default route for auth service FRONT');
});

models.post('/login', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  if(req.body.username && req.body.password && req.body.username=='vikesh' && req.body.password=='1234'){
    var token = jwt.sign({userID: req.body.username}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
    res.send({token});
  }else{
    res.json({success:false,message:"Invalid Username or Password"})
  }
});


models.get('/sp_test', (req, res) => {

  var getCities = function() {
    //var conn = new sql.Connection(config);
    sql.connect(config, function(conn) {
      var request = new sql.Request(conn);
      request.input('UserId', sql.VarChar(30), 'nik');
      //request.input('NameNew', sql.VarChar(30), 'Cbe');
      request.execute('WB_Login_Restriction').then(function(err, recordsets, returnValue, affected) {
        console.log(err.recordset);
        //console.dir(recordsets);
        //console.dir(err);
        sql.close();
      }).catch(function(err) {
        console.log(err);
      });
    });
  }

  getCities();
  //res.send('login method for auth service FRONT');
});




models.post('/signup', (req, res) => {
  res.send('signup method for auth service FRONT');
});


module.exports = models;
