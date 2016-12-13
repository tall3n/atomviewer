// Better way to see atom packages and themes
var express = require('express');
var app = express();

var pd = require('./pulldata.js');


pd.pullData();






//Urls to store later
// var usersurl = `https://atom.io/users/${author}`
// var themeurl = `https://atom.io/themes/${name}`

// app.get('/scrape', (req, res) => {
  //Scraping magic here





// app.listen('8081');
//
//
// console.log('Server started on port 8081');
//
//
// exports = module.exports = app;
