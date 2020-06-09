import { Layout, Page, TextStyle,EmptyState} from '@shopify/polaris';
import { TitleBar,ResourcePicker } from '@shopify/app-bridge-react';
import ImportListWithProducts from '../components/MyImportList';
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
   handleSelection = (resources) => {
     //store.set('ids',[]);
   
  }
  shop_products(){
    let url="https://aladdin-dropshipper-server.herokuapp.com/my-imported-products";
    axios.post(url,{"shop":shop}).then( (response)=>{ 
      const ids =response.data.map((product) => product.shopifyProductId);
      console.log(ids)
      store.set('imported_product_ids', ids);        
    } ).catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount() {
    const userRole=this.state.userRole;
    this.shop_products();
    console.log(accessToken)
    console.log(shop)
 }
  render() {
 
    //console.log()
    const { open,userRole }=this.state;
    const emptyState = !store.get('imported_product_ids');
    if(userRole=='dropshipper'){
    return (
     
  <Page>
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
        <ImportListWithProducts />
        )}
    </Page>
 
);
}else{
  return (
     
    <Page>
 <EmptyState
        heading="Search And Import Prroducts"
        action={{
          content: 'Search and  Import Products to sell on Your Shopify Store',
          onAction: () =>{},
        }}
        image={img}
      ></EmptyState>
      </Page>
  )}
}
}

export default Selling_products;