const mongoose = require('mongoose');
const ProductModel = require('./product');
var Schema = mongoose.Schema;
var DropshipProductSchema = new Schema({
    title: String,
    product:{type: Schema.Types.ObjectId, ref: 'ProductModel'},
    published: Boolean,
    dropshipper_shop:String,
    seller_shop:String,
    shopifyProductId:String
});

// Compile model from schema
var DropshipProduct = mongoose.model('DropshipProduct', DropshipProductSchema );
module.exports = DropshipProduct;