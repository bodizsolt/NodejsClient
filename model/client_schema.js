var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

ClientSchema = new Schema({
  name: String,
  email: String,
  company: String,
  dob: Date
});

exports.clientModel = mongoose.model('Client',ClientSchema);