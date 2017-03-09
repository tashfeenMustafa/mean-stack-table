var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/mydb');

// create a schema
var rowSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  uploaddate: String,
  sharedwith: String
});

var Rows = mongoose.model('rows', rowSchema);
var data = [];
// Find all movies.
Rows.find(function(err, row) {
  if (err) return console.error(err);
  console.dir(row);
  
  data = row;
  console.dir('data: ' + data);
});


// make this available to our users in our Node applications
module.exports = Rows;


