var express = require('express');
var path = require('path');

var db = require('./db');

// Middleware - not sure what these are doing.
var parser = require('body-parser'); //makes the req.body.json an available json object.

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

//set thew view templates and the view engine to ejs for loading the server
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

// Set what we are listening on.
app.set("port", process.env.PORT || 3000);

// Parsing
app.use(parser.json()); //makes it so that the req.body is available as JSON automatically from request.

// Serve static img, css, and js files from the client/dist directory..
app.use(express.static(path.join(__dirname, "../client/dist")));

// Set up our routes
app.use("/", router);


app.get("*", function(req, res) {
  res.render("index");
});

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

