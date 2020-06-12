import { Layout, Page, TextStyle,EmptyState} from '@shopify/polaris';
import { TitleBar,ResourcePicker } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../components/ResourceListSeller';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import store from 'store-js';
const axios =require('axios');
const session = require('koa-session');
import Cookies from 'js-cookie';
const shop=Cookies.get("shopOrigin");
const accessToken=Cookies.get("accessToken");
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Selling_products extends React.Component {
  static contextType = Context;
  
  state = { open: false,userRole:store.get('userRole') };
   handleSelection(resources){
//     const idsFromResources = resources.selection.map((product) => product.id);
//     this.setState({ open: false });
//     store.set('ids', idsFromResources);
// console.log(idsFromResources)
    //const ids =resources.selection.map((product) => product.id);
    // store.set('ids',ids);
    const app = this.context;
    const redirect = Redirect.create(app);
    const url="https://aladdin-dropshipper-server.herokuapp.com/products/new";
    this.setState({ open: false })
     const productcontainer = resources.selection.map((product) =>{
       console.log(product)
      const container = {};
      container.title = product.title;
      container.body_html = product.descriptionHtml;
      container.tags=product.tags;
      container.product_type=product.productType;
      container.vendor='dropshipper';
      container.shopifyProductId=product.id;
      container.shop=shop;
      const price = product.variants.edges[0].node.price;
      container.price=price;
      console.log("price"+ price)
      let pimages=product.images;
      container.images= pimages.map((image)=>image.originalSrc)
    // console.log(container.images)
      axios.post(url,container).then( ( response ) => {
        const ids =response.data.map((product) => product.shopifyProductId);
        store.set('ids', ids);  
       //console.log(response)
               
      } ).catch(function (error) {

      })
    });
  }
  shop_products(){
    let url="https://aladdin-dropshipper-server.herokuapp.com/shop_products";
    axios.post(url,{"shop":shop}).then( (response)=>{ 
      const isDataAvailable = response.data && response.data.length;
               if(isDataAvailable){
                const ids =response.data.map((product) => product.shopifyProductId);
                store.set('ids', ids);    
               }else{
                store.set('ids', []);  
               }
     
      // console.log(ids)    
    } ).catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount() {
    const userRole=this.state.userRole;
    this.shop_products();
  // store.set('ids',[]);
    console.log(accessToken)
    console.log(shop)
 }
  render() {
 
    //console.log()
    const { open,userRole }=this.state;
    const emptyState = !store.get('ids');
    const idss=store.get('ids')
   // if(userRole=='seller'){
    return (
     
  <Page>
    <TitleBar
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
    />
    <ResourcePicker
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
         {emptyState ? (
    <Layout>   
      <EmptyState
        heading="Sell Your Products on Multiple Stores"
        action={{
          content: 'Select products',
          onAction: () => this.setState({ open: true }),
        }}
        image={img}
      >
        <p>Select products to sale .</p>
      </EmptyState>
      </Layout>
       ) : (
         
        <ResourceListWithProducts/>
        
        )}
    </Page>

 
);
//}else{
//   return (
     
//     <Page>
//  <EmptyState
//         heading="Only Seller Can Sell Products"
//         action={{
//           content: 'Register As Seller',
//           onAction: () =>{},
//         }}
//         image={img}
//       ></EmptyState>
//       </Page>
//   )}
}
}

export default Selling_products;