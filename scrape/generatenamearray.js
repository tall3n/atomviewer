const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');



var themeNames = (arg, callback) => {
  console.log(arg)
  var namesarray = [];
  for(var j = 1; j < 61; j++) {
    url = url = `https://atom.io/themes/list?direction=desc&page=${j}&sort=created_at`

    request(url,function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var name1 = [];
        $('.grid-cell').each(function(i, element) {
          name1.push($(this).children().children().children().first().text().replace(/\n|\r| /g, ""));
        });
        callback(undefined,name1)
      }
    });
  };
};



module.exports.themeNames = themeNames
