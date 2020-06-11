const Shop=require('../models/shop');
const Order=require('../models/Orders');
module.exports ={
    updataToken:function(store,newaccessToken){
        console.log(newaccessToken)
       // var shop = new Shop({ shop: store,accessToken:newaccessToken });
       Shop.findOneAndUpdate(
          {shop: store}, // find a document with that filter
          {accessToken:newaccessToken }, // document to insert when nothing was found
          {upsert: true, new: true}, // options
          function (err, doc) { // callback
              if (err) {
                 return false;
              } else {
                  return true;
              }
          });
    },
    getMyOrders:function(store,newaccessToken){
      
        Order.find({domain: store}, // find a document with that filter
          function (err, doc) { // callback
              if (err) {
                 return {};
              } else {
                  return doc;
              }
          });
    }
}
