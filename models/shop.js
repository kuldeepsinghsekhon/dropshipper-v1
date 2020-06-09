const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    username:String,
    password:String,
    role:String,
    shop:String,
    accessToken:String,
    storeid:String,
    token:String
});

// Compile model from schema
var Shop = mongoose.model('Shop', ShopSchema );
module.exports = Shop;