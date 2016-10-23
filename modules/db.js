var mongoose = require("mongoose");

// windows下注释
var db = mongoose.connect('mongodb://localhost/facedoor');
module.exports = db;