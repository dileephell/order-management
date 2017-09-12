var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order = require('./api/models/orderListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/inventory'); 


app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


var routes = require('./api/routes/orderListRoutes'); //importing route
routes(app); //register the route

// Middleware to return message
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);
console.log('order list RESTful API server started on: ' + port);
