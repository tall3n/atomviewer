// Better way to see atom packages and themes
var express = require('express');
var _ = require('lodash');


var gn = require('./scrape/generatenamearray')


var app = express();


//Need to only run this if the data is stale.
// if (false) {
// var scraper = require('./scrape/scraper')
// gn.themeNames(1,(err, results) => {
//  if (err){
//    console.log('Ran into error', err)
//  }else{
//
//  var namesarray = _.concat(results)
//  scraper.pullPages(namesarray);
//  // fs.appendFile('tes1.out',namesarray);
// }
// });
// }


//Urls to store later
// var usersurl = `https://atom.io/users/${author}`
// var themeurl = `https://atom.io/themes/${name}`

app.get('/', (req, res) => {
  res.send("Start of something beautiful")



});

app.listen('8081');


console.log('Server started on port 8081');


exports = module.exports = app;
