const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
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
var User = mongoose.model('User', UserSchema );
module.exports = User;