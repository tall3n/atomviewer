//DEPRECATED
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const database = require('./database.js');
const pi = require('./pullimage.js')



function pullData(){
  for(var j = 1; j < 61; j++) {
    url = `https://atom.io/themes/list?direction=desc&page=${j}&sort=created_at`
    console.log(url);

    var json =  {name : "", description:"", author: "", downloads:"",imagename:""};
    var name,description, author, downloads;

    request(url, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        // $('span.css-truncate-target').each(function(i, element){
          $('.grid-cell').each(function(i, element){

            name = $(this).children().children().children().first().text();
            description = $(this).children().children().children().eq(1).text()
            author =  $(this).children().children().children().eq(4).text();
            downloads = $(this).children().children().children().eq(5).text()
            if (name != ""){
              console.log(name);
              json.name=name.replace(/\n|\r| /g, "");
              console.log(description);
              json.description = description.replace(/\n|\r/g, "");
              console.log(author);
              json.author = author.replace(/\n|\r|\s.??\W/g, "");
              console.log(downloads);
              downloads1 = downloads.replace(/\n|\r/g, "");
              downloads2 = downloads1.replace(/^......................./,"");
              downloads3 = downloads2.replace(/\s.*/,"");
              json.downloads = downloads3
              console.log('-----------------')
              //call the pull image function
              var imagename = pi.pullImage(json.name);
              json.imagename = imagename;

              return json

            }
            //Call Database
            //Method to close db after 60 iterations (Need to find a better way)
            // if (j === 60){
            //   var closedb = true
            // }else{
            //   var closedb = false
            // }
            //
            // database.databaseInsert(json.name,json.description,json.author,json.downloads,json.imagename,closedb);
      })
    }
    });




};
};


module.exports.pullData = pullData;
