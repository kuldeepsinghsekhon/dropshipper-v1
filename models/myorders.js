const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  domain: String,
    webhook_data: {type: Object},
    order_id: String,
     email: String,
    created_at: String,
  updated_at: String,
  billing_address:{type: Object},
  shipping_address:{type: Object},
  customer:{type: Object},
  default_address:{type: Object},
  line_items:{type: Object}    
});

// Compile model from schema
var Order = mongoose.model('order', OrderSchema );
module.exports = Order;