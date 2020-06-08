require('dotenv').config();
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const Product=require('../models/product');
const DropshipProduct=require('../models/dropship_product')
const User=require('../models/user');
const Shop=require('../models/shop');
const userService = require('./user.service');
const cors = require('cors')

const axios =require('axios');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

router.post('/products/new',(req,res)=>{
  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
  console.log(req.body.Title);
  console.log(obj);
  product =new Product(obj);
  product.save(function (err) {
    if (err) return handleError(err);
    res.json({message:"success"})
  })
 
})
router.post('/register_shop',(req,res)=>{
  const myshop=req.body.shop;
  const newaccessToken=req.body.accessToken;
  console.log(newaccessToken)
  var shopuser = new Shop({ shop: myshop,accessToken:newaccessToken });

  Shop.findOneAndUpdate(
    {shop: myshop}, // find a document with that filter
    {accessToken:newaccessToken }, // document to insert when nothing was found
    {upsert: true, new: true}, // options
    function (err, doc) { // callback
        if (err) {
           console.log(err)
        } else {
            res.json({"status":"Success","message":"app installed Successfully"})
        }
    }
);
  
})
router.post('/addto_shop', (req, res) => {
  const product=req.body.product;
  const dropshipper_shop=req.body.dropshipper_shop;
  const seller_shop=req.body.seller_shop;
  const shopifyProductId=req.body.shopifyProductId;
  console.log(dropshipper_shop)
 const url="https://"+dropshipper_shop+"/admin/api/2020-04/products.json";
 User.findOne({shop:dropshipper_shop})
 .exec(function(err, user) {
  if(user){
     const accessToken=user.accessToken;
    axios.post(url,{"product":product},{headers:{"X-Shopify-Access-Token":accessToken}})
    .then( (response)=>{ 
      const dshp_product= {"title": product.title,"published": true, "dropshipper_shop":dropshipper_shop,"seller_shop":seller_shop,
      "shopifyProductId":response.data.product.admin_graphql_api_id};
       const dropship_product= new DropshipProduct(dshp_product);
      dropship_product.save();
       res.json({"status":"success","admin_graphql_api_id":response.data.product.admin_graphql_api_id})
     } ).catch(function (error) {
       console.log("error");
       console.log(error);
     })
   }
})
})
router.post('/products',(req,res)=>{
 const{title,product_type}= req.body;
 console.log(title)
 var query =Product.find();
 if(title)
 query.where('title').equals({$regex : title});
  //where('age').gt(17).lt(50).  //Additional where query
  query.limit(50);
  query.sort({ title: -1 });
  //select('name age').
  query.exec(function(err,products)
  {
    if(err) res.json({data:'',error:err,message:'failed to retrive products'})
    res.json(products);
  });
});
router.post('/shop_products',(req,res)=>{
  const {shop}= req.body;
  var query =Product.find();

  query.where('shop').equals(shop);
   //where('age').gt(17).lt(50).  //Additional where query
   query.limit(50);
   query.sort({ title: -1 });
   //select('name age').
   query.exec(function(err,products)
   {
     if(err) res.json({data:'',error:err,message:'failed to retrive products'})
     res.json(products);
   });
 });
 router.post('/my-imported-products',(req,res)=>{
  const {shop}= req.body;
  var query =DropshipProduct.find();

  query.where('dropshipper_shop').equals(shop);
   //where('age').gt(17).lt(50).  //Additional where query
   query.limit(50);
   query.sort({ title: -1 });
   //select('name age').
   query.exec(function(err,products)
   {
     if(err) res.json({data:'',error:err,message:'failed to retrive products'})
     res.json(products);
   });
 });
router.post('/login',function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send('user not found'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json({"user": user});
    });
  })(req, res, next);
});
router.post('/signin',passport.authenticate('local',{session:false} ) ,(req, res, next)=>{
  userService.authenticate(req.body)
      .then((user)=>{
      // console.log(user.token)
        user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect'})
       } ).catch(err => next(err));
 });
router.post('/signup',(req,res)=>{
  //const role=Role.User;
  const newUser = new User();
 //const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
  const username = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals], style: 'capital' }); // big_red_donkey
  //const token=Math.ceil(Math.random() * 1000000); //tokgen.generate();
 const { email, password, password2,firstName,lastName,role } = req.body;
 let errors = [];

 if (!username || !email || !password || !password2 ||!firstName||!lastName) {
   errors.push({ msg: 'Please enter all fields' });
 }
 if (password != password2) {
   errors.push({ msg: 'Passwords do not match' });
 }
 if (password.length < 6) {
   errors.push({ msg: 'Password must be at least 6 characters' });
 }
 if (username.length < 5) {
  errors.push({ msg: 'username must be at least 5 characters' });
}
 if (email.length < 6) {
   errors.push({ msg: 'email must be at least 6 characters' });
 }
 if (firstName.length < 3) {
  errors.push({ msg: 'firstName must be at least 3 characters' });
}
if (lastName.length < 3) {
  errors.push({ msg: 'lastName must be at least 3 characters' });
}
 if (errors.length > 0) {
  res.json({status:'error',data:{errors:errors,username:username,firstName:firstName,lastName:lastName,email:email,password:password,password2:password2},message:'Failed To Register'});

 } else {
   User.findOne({ email: email }).then(user => {
     if (user) {
       errors.push({ msg: 'Email already exists' });
      res.json({status:'error',data:{errors:errors,username:username,lastName:lastName,email:email,password:password,password2:password2},message:'Error Failed To register'});
     } else {
         newUser.username=username;
         newUser.lastname=lastName;
         newUser.firstName=firstName;
         newUser.email=email;
         newUser.password=password
         newUser.role=role;
         newUser.save(function (err) {
             if (err) return handleError(err);
           // res.json({message:"success"})
          })
          res.json({status:'success',data:{user:newUser},message:"Thanks For Register"});
     }
   });
 }
});

module.exports=router;