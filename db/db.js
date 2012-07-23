var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/test');

exports.db = db;