const Store=require('../models/shop');
exports ={
    updataToken:function(myshop,newaccessToken){
        console.log(newaccessToken)
        var shopifystore = new Store({ shop: myshop,accessToken:newaccessToken });
        shopifystore.findOneAndUpdate(
          {shop: myshop}, // find a document with that filter
          {accessToken:newaccessToken }, // document to insert when nothing was found
          {upsert: true, new: true}, // options
          function (err, doc) { // callback
              if (err) {
                 return false;
              } else {
                  return true;
              }
          });
    }
}
