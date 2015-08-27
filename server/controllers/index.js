var models = require('../models');

module.exports = { //these routes should load some different things..
  messages: {
    get: function (req, res) {
      res.end("something");
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  

  //some routes will return json.

};

