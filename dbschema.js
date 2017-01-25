var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');



var themeSchema = new Schema({
  name: String,
  themeurl: String,
  description: String,
  author: String,
  authorurl: String,
  downloads: String,
  imagename: String
});
themeSchema.plugin(mongoosePaginate);

var Theme = mongoose.model('themeSchema', themeSchema);

module.exports = Theme;