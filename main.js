// Better way to see atom packages and themes
var express = require('express');
var _ = require('lodash');
var hbs = require('hbs');

var gn = require('./generatenamearray')
var d = require('./database')

// var app = express();
// app.set('view engine', 'hbs');
// app.use(express.static(__dirname+'/public'));

// middlwarre
// none yet


//=======Do something with this later=====//
//Need to only run this if the data is stale.

var scraper = require('./scraper')
gn.themeNames(1,(err, results) => {
 if (err){
   console.log('Ran into error', err)
 }else{

 var namesarray = _.concat(results)
 scraper.pullPages(namesarray);
 // fs.appendFile('tes1.out',namesarray);
}
});



//Urls to store later
// var usersurl = `https://atom.io/users/${author}`
// var themeurl = `https://atom.io/themes/${name}`


// app.get('/', (req, res) => {
  
  
//   console.log('----------------')

//   res.render('home.hbs', {
//     pageTitle:'Atom Theme Viewer',
//     welcomeMessage: "Welcome to the Best way to View Atom Themes",
//     theme: d.databasePull('beacon-ui')
//   }) 
//  });



// app.listen('8081');


// console.log('Server started on port 8081');


// exports = module.exports = app;
