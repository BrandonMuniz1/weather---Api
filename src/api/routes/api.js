const weather = require('./weather.js');
const routes = require('express').Router();



routes.use("/weather", weather)



module.exports = routes;