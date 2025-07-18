require('isomorphic-fetch');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const axios =require('axios');
const Router = require('koa-router');
const rootRouter = require('./routes/index');
const databaseHelper = require('./helpers/databaseHelper');
const {receiveWebhook, registerWebhook} = require('@shopify/koa-shopify-webhooks');
dotenv.config();

var mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;


  const port = parseInt(process.env.PORT, 10) || 3000;
  const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require('path')
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY,HOST, } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ sameSite: 'none', secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products', 'write_products','read_orders', 'write_orders'],
      async  afterAuth(ctx) {
        const {shop, accessToken} = ctx.session;
        console.log(accessToken)
        // let url="https://aladdin-dropshipper-server.herokuapp.com/register_shop";
        // axios.post(url,{"shop":shop,"accessToken":accessToken}).then( (response)=>{         
        // } ).catch(function (error) {
        //   console.log(error);
        // })
        databaseHelper.updataToken(shop, accessToken);
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });
        const products_webhook = await registerWebhook({
          address: `${HOST}/webhooks/products/update`,
          topic: 'PRODUCTS_UPDATE',
          accessToken,
          shop,
          apiVersion: ApiVersion.October19
        });
 
        if (products_webhook.success) {
          console.log('Successfully registered products update webhook!');
        } else {
          console.log('Failed to register products update webhook', products_webhook.result);
        }
        const orders_webhook = await registerWebhook({
          address: `${HOST}/webhooks/order/create`,
          topic: 'ORDERS_CREATE',
          accessToken,
          shop,
          apiVersion: ApiVersion.October19
        });
 
        if (orders_webhook.success) {
          console.log('Successfully registered orders_webhook!');
        } else {
          console.log('Failed to register orders_webhook', orders_webhook.result);
        }
        const orders_webhook1 = await registerWebhook({
          address: `${HOST}/webhooks/order/create`,
          topic: 'orders/create',
          accessToken,
          shop,
          apiVersion: ApiVersion.October19
        });
 
        if (orders_webhook1.success) {
          console.log('Successfully registered orders_webhook!');
        } else {
          console.log('Failed to register orders_webhook', orders_webhook1.result);
        }
        ctx.redirect('/');
      },  
    }),

  );

  server.use(graphQLProxy({version: ApiVersion.October19}))

  router.get('*', verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
 
  server.use(router.allowedMethods());
  server.use(rootRouter.routes());
  server.use(router.routes());

  mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});