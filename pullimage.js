const request = require('request');
const cheerio = require('cheerio');



function pullImage(name){
  url1 = `https://atom.io/themes/${name}`
  request(url1, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);


        $('.markdown-body.readme').each(function(i, element){
          var imagename = $(this).children().eq(2).children().attr('data-canonical-src');
          console.log(imagename)
          return imagename

        });

}


});



}


module.exports.pullImage = pullImage
