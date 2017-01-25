var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theme = require('./dbschema');


mongoose.connect('mongodb://localhost/AtomScrapeMongoose');


// Theme.find({name: 'one-dark-shade-ui'}, ((err, theme) =>{
//   if (err) throw err;

//   console.log(theme)
// }));
var query ={};
var options ={
  select: 'name author'
}
var test1 = Theme.paginate({}, {page: 1, limit: 10, select: 'name author downloads', sort: {downloads: -1}}, ((err, result)=>{
  console.log(result)
}))

module.exports = test1