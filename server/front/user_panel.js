const route = require('express').Router();
const sql = require("mssql");
const config = { user: process.env.DB_USER, password: process.env.DB_PASSWORD, server: process.env.DB_SERVER, database: process.env.DB_DATABASE,options:{encrypt:false}};


route.get('/', (req, res) => {
  res.send('default route for userpanel FRONT');
});


route.post('/myOrders', (req, res) => {

  const conn = new sql.ConnectionPool(config)
  conn.connect().then(function () {
    var request = new sql.Request(conn);

    request.input('UserId', sql.VarChar(30), req.body.UserId);
    request.input('StatusType', sql.VarChar(30),req.body.StatusType);
    request.execute('WB_ConOrdDisp_Kendo_New').then(function (recordsets, returnValue, affected) {
      if (recordsets && recordsets.recordsets && recordsets.recordsets[0]) {
        res.json({success: true, data: recordsets.recordsets[0]})
      } else {
        res.json({success: true, data: []})
      }
      conn.close();
    }).catch(function (err) {
      console.log(err);
      conn.close();
    });
  }).catch(function (err) {
      console.log(err);
  });
});

route.post('/savedsearch', (req, res) => {

  const conn = new sql.ConnectionPool(config)
  conn.connect().then(function () {
    var request = new sql.Request(conn);
    request.input('UserId', sql.VarChar(30), req.body.UserId);
    request.execute('WB_FillSaveSearchDetail_ByUser').then(function(recordsets, returnValue, affected) {

      if(recordsets && recordsets.recordsets && recordsets.recordsets[0]){
        res.json({success:true,data:recordsets.recordsets[0]})
      }else{
        res.json({success:true,data:[]})
      }
      conn.close();
    }).catch(function(err11) {
      console.log('err11 ',err11);
      res.json({success:true,data:[]})
      conn.close();
    });
  }).catch(function (err22) {
    console.log('err22 ',err22);
    res.json({success:true,data:[]})
  });


});


route.post('/newstones', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), req.body.UserId);
        //request.input('PAGENAME', sql.VarChar(30), req.body.PAGENAME);
        request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('UFN_GetCount_UserPanel').then(function (recordsets, returnValue, affected) {

            console.log('user id',req.body.UserId);
            console.log('new stones res');
            console.log(recordsets);


            if(recordsets && recordsets.output && recordsets.output['']){
                res.json({success: true, data: recordsets.output['']})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/get_page_count', (req, res) => {

  const conn = new sql.ConnectionPool(config)
  conn.connect().then(function () {
    var request = new sql.Request(conn);
    request.input('UserId', sql.VarChar(30), req.body.UserId);
    //request.input('PAGENAME', sql.VarChar(30), req.body.PAGENAME);
    // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
    // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
    request.execute('WB_GET_PAGE_COUNT').then(function (recordsets, returnValue, affected) {

      console.log('user id',req.body.UserId);
      console.log('get_page_count res');
      console.log(recordsets);


      if(recordsets && recordsets.recordset && recordsets.recordset[0]){
        res.json({success: true, data: recordsets.recordset[0]})
      }else{
        res.json({success: true, data: null})
      }
      conn.close();
    }).catch(function (err) {
      console.log(err);
      conn.close();
    });
  }).catch(function (err) {
    console.log(err);
  });
});


route.post('/simpleRequestWithoutPoolExample', (req, res) => {
  console.log(req.user);
  console.log(req.body);

  //sql.close();
  sql.connect(config, function(conn) {
    var request = new sql.Request(conn);
    request.input('UserId', sql.VarChar(30), 'nik-Peacock');
    request.input('StatusType', sql.VarChar(30), 'S_India');
    request.execute('WB_ConOrdDisp_Kendo_New').then(function(recordsets, returnValue, affected) {

      if(recordsets && recordsets.recordsets && recordsets.recordsets[0]){
        res.json({success:true,data:recordsets.recordsets[0]})
      }else{
        res.json({success:true,data:[]})
      }
      sql.close();
    }).catch(function(err) {
      console.log(err);
      sql.close();
    });
  });

});

module.exports = route;


setTimeout(() =>
        this.seconds = () => this.timerComponent.seconds,
    0);