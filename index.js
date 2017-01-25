var mongoose = require('mongoose');
var express = require('express');
var paginate = require('express-paginate');
var Theme = require('./dbschema')
var app = express();
var test1 = require('./querytesting')


app.use(paginate.middleware(10, 50));

app.get('/themes', ((req, res) => {
  res.send(test1)
}));

app.listen(3000);