var _ = require('lodash');
var fs = require('fs');

var scrapy = require('node-scrapy'),

model =
{
  name: '.css-truncate-target a',
  description: '.css-truncate-target.card-description',
  author: '.author',
  downloads:'.value ',
  image:'data-canonical-src'
};

var d = require('./database.js');

var pullPages =  (array) => {
    _.forEach(array,(value)=> {
      url = `https://atom.io/themes/${value}`
      scrapy.scrape(url, model, function (err, data) {
        if (err) {
        return console.error(err);
      }
    console.log(data.name)
    d.databaseInsert(data.name,data.description,data.author,data.downloads,data.image)
    });
  })
}


module.exports.pullPages = pullPages
