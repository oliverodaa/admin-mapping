/**
 * Module dependencies
 */

var express = require('express');
var app = express();

var ejs = require('ejs');
var fs = require('fs');
var join = require('path').join;
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

/**
 * Config
 */

// Templating
app.set('views',__dirname + '/app/views');
app.set('view engine', 'ejs');
// STATIC FOLDER
app.use(express.static(__dirname + '/static'));


/**
 * Expose
 */

module.exports = app;

/**
 * Boostrap Models
 */

// Require all files in app/models
var models = join(__dirname, 'app/models');
fs.readdirSync(models)
  .filter(function(file) {return ~file.search(/^[^\.].*\.js$/);})
  .forEach(function(file) {require(join(models, file));});

/**
 * Open connection to DB
 */
// require('./app/config.js');

/**
 * Boostrap Routes
 */
var routes = join(__dirname, 'app/routes');
fs.readdirSync(routes)
  .filter(function(file) {return ~file.search(/^[^\.].*\.js$/);})
  .forEach(function(file) {require(join(routes, file))(app);});

(function() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
})()