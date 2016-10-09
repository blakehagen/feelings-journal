'use strict';

// EXPRESS //
const express    = require('express');
const session    = require('express-session');
const bodyParser = require('body-parser');
const cors       = require('cors');
const logger     = require('morgan');

module.exports = () => {
  const app = express();

  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(session({
    secret: 'kjasd$@@#!!@$hfjkahsdf7274r2#$#@$$@',
    resave: false,
    saveUninitialized: true
  }));

  app.use(express.static('build'));
  return app;
};