const models = require('express').Router();

const auth_service = require('./auth_service');
const user_panel = require('./user_panel');

models.use('/authService', auth_service);
models.use('/UserPanel', user_panel);

models.post('/', (req, res) => {
  res.send('default route for front');
});

module.exports = models;
