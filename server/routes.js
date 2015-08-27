
//set the routes using the controllers file.
//understand this file better.

var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) { //loops through the controller object.
  router.route("/" + route) //creates a router with urls like "/classes/messages/, /classes/users/"
  .get(controllers[route].get) //creates the .get route
}

module.exports = router;