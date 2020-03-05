const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const front = require('./server/front');
const admin = require('./server/admin');
const api = require('./api');

const app = express();
const cors = require('cors');
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// vikesh git testtttttttttttttt


app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/front/authService/login','/front/authService/signup']}));

app.use(function (err, req, res, next) {
  //jwt middlware for error handling
  res.header("Access-Control-Allow-Origin", "*");
  if (err.name === 'UnauthorizedError') {
    res.json({"success":false,"message":"unauthorized_access"})
  }
});


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use('/api', api);
app.use('/front', front);
app.use('/admin', admin);

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });


const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
