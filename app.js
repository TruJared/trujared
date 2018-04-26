const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const helpers = require('./helpers');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serves up static files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass variables to our templates + all requests
// helpers is an AWESOME practice >>> learn this well.
// notice that the helpers file is required at the top of this page
app.use((req, res, next) => {
  res.locals.h = helpers;
  // res.locals.currentPath = req.path;
  next();
});

// fire it up
app.use('/', router);

// error handlers

// done! we export it so we can start the site in start.js
module.exports = app;
