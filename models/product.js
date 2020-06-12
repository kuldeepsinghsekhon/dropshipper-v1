const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductModelSchema = new Schema({
    title: String,
    body_html: String,
    tags: [String],
    product_type:String,
    vendor:String,
    price:String,
    variants: [
        Object
      ],
      shopifyProductId:String,
      images:[String],
    Collection:String,
    published: Boolean,
    shop:String,
    ProductSch: {type: Object}
});

// Compile model from schema
var ProductModel = mongoose.model('ProductModel', ProductModelSchema );
module.exports = ProductModel;