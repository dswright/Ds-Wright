const express = require('express');

const app = express();
const path = require('path');

const favicon = require('serve-favicon');

console.log('dirname', __dirname);

// app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'assets')));

module.exports = app;
