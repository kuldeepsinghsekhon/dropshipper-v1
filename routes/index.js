const Product=require('../models/product');
const DropshipProduct=require('../models/dropship_product')
const User=require('../models/user')
const Shop=require('../models/shop')
const Router = require('koa-router');
const router = new Router();
  router.get('/server-routes/test', (ctx) => {
    console.log('received webhook: ctx.state.webhook');
    ctx.body="oter html page route";
  });
  router.get('/server/tes', (ctx) => {
    //console.log('received webhook: ctx.state.webhook');
    ctx.body="second page";
  });
  // router.get('/products', async function(ctx){
      
  //  // const{title,product_type}= req.body;
  //  const title='';
  //   console.log(title)
  //   var products=await Product.find();
  //   // var query =Product.find();
  //   // if(title)
  //   // query.where('title').equals({$regex : title});
  //   //  //where('age').gt(17).lt(50).  //Additional where query
  //   //  query.limit(50);
  //   //  query.sort({ title: -1 });
  //   //  //select('name age').
  //   //  query.exec(function(err,products)
  //   //  {
  //   //    if(err) ctx.response.json({data:'',error:err,message:'failed to retrive products'})
  //   //    this.products=products;
  //   //    //console.log(products);
  //   //    ctx.body=products;
  //   //  });
  //   ctx.body=products;
  //  });
  //  router.post('/shop_products',(req,res)=>{
  //    const {shop}= req.body;
  //    var query =Product.find();
   
  //    query.where('shop').equals(shop);
  //     //where('age').gt(17).lt(50).  //Additional where query
  //     query.limit(50);
  //     query.sort({ title: -1 });
  //     //select('name age').
  //     query.exec(function(err,products)
  //     {
  //       if(err) res.json({data:'',error:err,message:'failed to retrive products'})
  //       res.json(products);
  //     });
  //   });
  //   router.post('/my-imported-products',(req,res)=>{
  //    const {shop}= req.body;
  //    var query =DropshipProduct.find();
   
  //    query.where('dropshipper_shop').equals(shop);
  //     //where('age').gt(17).lt(50).  //Additional where query
  //     query.limit(50);
  //     query.sort({ title: -1 });
  //     //select('name age').
  //     query.exec(function(err,products)
  //     {
  //       if(err) res.json({data:'',error:err,message:'failed to retrive products'})
  //       res.json(products);
  //     });
  //   });
  //   router.post('/addto_shop', (req, res) => {
  //       const product=req.body.product;
  //       const dropshipper_shop=req.body.dropshipper_shop;
  //       const seller_shop=req.body.seller_shop;
  //       const shopifyProductId=req.body.shopifyProductId;
  //       console.log(dropshipper_shop)
  //      const url="https://"+dropshipper_shop+"/admin/api/2020-04/products.json";
  //      Shop.findOne({shop:dropshipper_shop})
  //      .exec(function(err, shop) {
  //       if(shop){
  //          const accessToken=shop.accessToken;
  //         axios.post(url,{"product":product},{headers:{"X-Shopify-Access-Token":accessToken}})
  //         .then( (response)=>{ 
  //           const dshp_product= {"title": product.title,"published": true, "dropshipper_shop":dropshipper_shop,"seller_shop":seller_shop,
  //           "shopifyProductId":response.data.product.admin_graphql_api_id};
  //            const dropship_product= new DropshipProduct(dshp_product);
  //           dropship_product.save();
  //            res.json({"status":"success","admin_graphql_api_id":response.data.product.admin_graphql_api_id})
  //          } ).catch(function (error) {
  //            console.log("error");
  //            console.log(error);
  //          })
  //        }
  //     })
  //     })
  //     router.post('/register_shop',(req,res)=>{
  //       const myshop=req.body.shop;
  //       const newaccessToken=req.body.accessToken;
  //       console.log(newaccessToken)
  //       var shopuser = new Shop({ shop: myshop,accessToken:newaccessToken });      
  //       Shop.findOneAndUpdate(
  //         {shop: myshop}, // find a document with that filter
  //         {accessToken:newaccessToken }, // document to insert when nothing was found
  //         {upsert: true, new: true}, // options
  //         function (err, doc) { // callback
  //             if (err) {
  //                console.log(err)
  //             } else {
  //                 res.json({"status":"Success","message":"app installed Successfully"})
  //             }
  //         }
  //     );      
  //     })
  module.exports = router;