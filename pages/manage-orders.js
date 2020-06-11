import React from 'react';
import {Page,Spinner,Filters, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
const axios =require('axios');
const store= require('store-js')
const stripHtml =require('string-strip-html');
var product={title:""};
import Cookies from 'js-cookie';
const accessToken=Cookies.get("accessToken");
const databaseHelper = require('../helpers/databaseHelper');
export default class ResourceListWithProducts extends React.Component {
  state = {
    selectedItems: [],
    orders:[],
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
      const orders=databaseHelper.getMyOrders(this.state.dropshipper_shop);
      this.setState({orders:orders});
    }
 }
  renderItem(item) {
   
    const {order_id,customer, email, shipping_address,created_at} = item;
    let button;

 
      button= <Button  onClick={()=>alert("comming soon")}
      >View Detail</Button> ;

    return (
      
      <ResourceItem
      
        id={order_id}
        accessibilityLabel={`View details for ${order_id}`}
      >
        <h3>
          <TextStyle variation="strong">{customer.first_name}</TextStyle>
        </h3>
        <div>{line_items.map((product) =>{ <p>product.name</p>})}</div>
          {button}
        </ResourceItem> 
    );
  }
  onSelectionChange(items){
    const idsFromResources = items.map((item) => item.order_id);       
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

  render() {
    const {
      selectedItems,
      queryValue,
      sortValue,
      typeselected,
      orders,
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
          singular: 'order',
          plural: 'orders',
        }}
        items={orders}
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
