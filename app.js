var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var router = require('./routes/index.js');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));


let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Hello Dave.`);
});

module.exports = app;
