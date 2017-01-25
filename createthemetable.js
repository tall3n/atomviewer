var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theme = require('./dbschema');


mongoose.connect('mongodb://localhost/AtomScrapeMongoose');

function databaseInsert(name,description,author,downloads,imagename){
      if (name != "") {
      var theme = new Theme({
        name:name,
        themeurl:`https://atom.io/themes/${name}`,
        description:description,
        author:author,
        authorurl:`https://atom.io/users/${author}`,
        downloads:downloads,
        imagename:imagename
      });
      
      theme.save(function(err) {
        if (err) throw err;

        console.log('Theme Saved')
      })
      }
};



// module.exports.databasePull = databasePull
module.exports.databaseInsert = databaseInsert


