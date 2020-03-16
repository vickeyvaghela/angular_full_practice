const route = require('express').Router();
const sql = require("mssql");
const config = { user: process.env.DB_USER, password: process.env.DB_PASSWORD, server: process.env.DB_SERVER, database: process.env.DB_DATABASE,options:{encrypt:false}};


route.get('/', (req, res) => {
    res.send('default route for userpanel FRONT');
});


route.post('/searchDiamond', (req, res) => {


    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        console.log('req.body start ');
        console.log(JSON.stringify(req.body));
        console.log('req.body end ');



        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('S_Code', sql.VarChar(30), req.body.S_Code);

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
        request.input('Origin', sql.VarChar(30), req.body.Origin);
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute(spName).then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                console.log('this his search res');
                console.log();
                //console.log(JSON.stringify(recordsets.recordset));
                console.log();
                res.json({success: true, data: recordsets.recordset})
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


route.post('/fancyintensity', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_ColIntensity').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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
route.post('/fancyovertone', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_ColOvertone').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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
route.post('/fancycolor', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_FancyColor').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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



route.post('/getLocations', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_LocationMast').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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

route.post('/getOrigins', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_OriginMast').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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

route.post('/getShade', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_BSHDMAST').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
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


route.post('/getHNAMst', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.query('select * from HAMast', function(errQuerygetHNAMst, recordsets) {
            if(errQuerygetHNAMst){ console.log(errQuerygetHNAMst); }
            conn.close();


            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }

        });



    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/getLUSTMst', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.query('select * from LustMast', function(errQuerygetHNAMst, recordsets) {
            if(errQuerygetHNAMst){ console.log(errQuerygetHNAMst); }
            conn.close();


            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }

        });



    }).catch(function (err) {
        console.log(err);
    });
});



route.post('/simpleRequestWithoutPoolExample', (req, res) => {

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

