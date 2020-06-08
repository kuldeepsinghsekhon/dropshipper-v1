const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageModelSchema = new Schema({
originalSrc:String,
altText:String
})

    var ImageModel = mongoose.model('Image', ImageModelSchema );
module.exports = Product;