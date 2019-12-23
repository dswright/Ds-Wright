const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

// allow req.secure (https parameter) to be passed through proxy
app.enable('trust proxy');

// redirect http to https
app.use((req, res, next) => {
  if (req.secure || req.headers.host === 'localhost:3000') {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

module.exports = app;
