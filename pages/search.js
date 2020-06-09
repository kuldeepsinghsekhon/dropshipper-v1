import React from 'react';
import {Page,Spinner,Filters, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
const axios =require('axios');
const store= require('store-js')
const stripHtml =require('string-strip-html');
var product={title:""};
import Cookies from 'js-cookie';
const accessToken=Cookies.get("accessToken");
export default class ResourceListWithProducts extends React.Component {
  state = {
    selectedItems: [],
    products:[],
    queryValue:'',
    sortValue:'',
    typeselected:'',
    userRole:store.get('userRole'),
    showspinner:false,
    dropshipper_shop:Cookies.get("shopOrigin")
  };
  componentDidMount() {
    const userRole=this.state.userRole;
    if(userRole=='dropshipper'){
    let url="https://aladdin-dropshipper-server.herokuapp.com/products";
 
    axios.post(url).then( (response)=>{ 
      console.log(response.data )
     // store.set('user',response.data)
      this.setState({products:response.data});
        //redirect.dispatch(Redirect.Action.APP,'/')      
    } ).catch(function (error) {
      console.log(error);
    })
  }
 }
  renderItem(item) {
    const body_html=stripHtml( item.body_html);
    const dropshipper_shop=this.state.dropshipper_shop;
    const {id, url, title,avatarSource,shop} = item;
    const media = <Thumbnail product size="large" name={name} 
                         source={
                        item.images[0]
                          ? item.images[0]
                          : ''
                      }    />;
    let button;

    if(dropshipper_shop==shop){
      button= <Button  onClick={()=>alert("You can not import your product")}
      >Your Product</Button> ;
           
    }else{
      button= <Button  onClick={()=>this.addproduct(item)}
      icon={CirclePlusMinor}>Add a product</Button> ;
     
    }
    return (
      
      <ResourceItem
      
        id={id}
       
        media={media}
        accessibilityLabel={`View details for ${title}`}
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
        </h3>
        <div><p>{body_html}</p></div>
          {button}
        </ResourceItem> 
    );
  }
  onSelectionChange(items){
    const idsFromResources = items.map((item) => item);       
    this.setState({ selectedItems: idsFromResources });
  }
  onSortChange(selected){
      this.setState({ SortValue: selected });
      console.log(`Sort option changed to ${selected}.`);  

  }
  handleQueryValueChange(value){
    this.setState({queryValue:value})
    console.log('handleQueryValueChange'+value)
    console.log(accessToken);
  }
  handleQueryValueRemove(value){
    this.setState({queryValue:null})
    console.log('handleQueryValueRemove'+value)
  }
  addproduct(item){
   const{title,product_type,body_html,variants,shop}=item;
   const shopifyProductId=item.shopifyProductId;
  const vendor="dropshipper"
  const images =item.images.map((image)=>{
    const container = {};
    container.src = image;
    return container;
  
  })
  console.log(images);
  const product={
    "title": title,
      "body_html":body_html,
      "vendor": vendor,
      "product_type": product_type,
      "variants":variants,
      "images":images
    }
  
const url="http://localhost:3000/addto_shop";
const dspshop=Cookies.get("shopOrigin");
axios.post(url,{"product":product,"dropshipper_shop":dspshop,"seller_shop":shop,"shopifyProductId":shopifyProductId}).then( (response)=>{ 
 console.log("response.data") 
 console.log(response.data)        
} ).catch(function (error) {
  console.log("error");
  console.log(error);
})
  
  }
  render() {
    const {
      selectedItems,
      queryValue,
      sortValue,
      typeselected,
      products,
      showspinner
    }=this.state;
    const options = [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];
    const filters = [
      {
        key: 'taggedWith',
        label: 'Tagged with',
        filter: (
          <Select
          label="Date range"
          options={options}
          onChange={()=>handleSelectChange()}
          value={typeselected}
        />
        ),
        shortcut: true,
      }
    ];
   
    const filterControl = (
      <Filters
        queryValue={queryValue}
        filters={filters}   
        onQueryChange={(value)=>this.handleQueryValueChange(value)}
        onQueryClear={(value)=>this.handleQueryValueRemove(value)}
      >
        <div style={{paddingLeft: '8px'}}>
          <Button onClick={() => console.log('New filter saved')}>Save</Button>
        </div>
      </Filters>
    );
  return (
    <Page>
       
    <Card>
   
      <ResourceList
        resourceName={{
          singular: 'product',
          plural: 'products',
        }}
        items={products}
        renderItem={(item)=>this.renderItem(item)}
        selectedItems={selectedItems}
        onSelectionChange={(items)=>this.onSelectionChange(items)}
        promotedBulkActions={ [
          {
            content: 'Import Products',
            onAction: () => console.log('Todo: implement bulk edit'),
          },
        ]}
       
        sortOptions={[
          {label: 'Newest update', value: 'DATE_MODIFIED_DESC'},
          {label: 'Oldest update', value: 'DATE_MODIFIED_ASC'},
        ]}
        onSortChange={(selected) =>this.onSortChange(selected)}
        filterControl={filterControl}
        
      />
  
    </Card>
    </Page>
  );

 
}

}
