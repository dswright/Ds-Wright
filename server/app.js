var express = require('express');
var path = require('path');
var expressHbs = require('express-handlebars');
var fs = require ('fs');
var markdown = require("markdown").markdown;
var glob = require('glob');

var db = require('./db');

// Middleware
var parser = require('body-parser'); //makes the req.body.json an available json object.

var app = express();
module.exports.app = app;

//set thew view templates and the view engine to ejs for loading the server
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:false}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/templates');

// Set what we are listening on.
app.set("port", process.env.PORT || 3000);

// Parsing
app.use(parser.json()); //makes it so that the req.body is available as JSON automatically from request.

// Serve static img, css, and js files from the client/dist directory..
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/post_source/:id', function(req, res) {
  res.writeHead(200, {"Content-Type":"application/json"});
  glob("server/source_data/post_data/1-*.MD", 'utf-8', function(err, files){ //the wildcard file name matching requires a module called 'glob'
    console.log(files);
    fs.readFile(files[0], 'utf-8', function(err, data) { //the first file name in the response will be the correct post file.
      if (err) throw err;
      var responseObj = {
        markdown: markdown.toHTML(data),
      }
      res.end(JSON.stringify(responseObj)); //the response to the browser is the json object with the post html.
    });
  });
});

app.get("*", function(req, res) {
  res.render("index"); //everything else goes to the same template and is handled by Backbone.
});

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

