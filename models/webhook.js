const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductWebhookSchema = new Schema({
    webhook_data: {type: Object},
    
});

// Compile model from schema
var ProductWebhook = mongoose.model('ProductWebhook', ProductWebhookSchema );
module.exports = ProductWebhook;