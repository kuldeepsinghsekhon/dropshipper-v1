const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VariantSchema = new Schema({
    product_id: String,
    title: String,
    price: String,
    sku: String,
    position: Number,
    inventory_policy: String,
    compare_at_price: String,
    fulfillment_service:String,
    inventory_management: String,
    option1:String,
    option2: String,
    ption3: String,
    created_at: Date,
    pdated_at: Date,
    taxable: Boolean,
    barcode :String,
    grams: Number,
    mage_id: String,
    weight: Number,
    weight_uni: String,
    inventory_item_id: String,
    inventory_quantity: Number,
    old_inventory_quantity: Number,
    requires_shipping: Boolean,
    admin_graphql_api_id: String,
    presentment_prices: [
      {
        price: {
          currency_code: String,
          amount: String
        },
        compare_at_price: String
      }
    ]
})
var VariantModel = mongoose.model('Variant', VariantSchema );
module.exports = VariantModel;