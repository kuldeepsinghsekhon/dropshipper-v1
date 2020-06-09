import App from 'next/app';
import Head from 'next/head';
import { AppProvider,Frame,FooterHelp,Link,TopBar,Navigation} from '@shopify/polaris';
import {ArrowLeftMinor,CustomersMinor,SettingsMajorMonotone,DraftOrdersMajorMonotone,OnlineStoreMajorMonotone,ProductsMajorTwotone,SearchMajorMonotone, ConversationMinor, HomeMajorMonotone, OrdersMajorTwotone} from '@shopify/polaris-icons';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/styles.css';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import store from 'store-js';
import { createApp } from '@shopify/app-bridge';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});
const app = createApp({
  apiKey: 'e4414e65bcc81be4c7eb5e153132934e',
  shopOrigin: Cookies.get("shopOrigin"),
});
class MyApp extends App {  

  state={
    isUserMenuOpen:false,
    toggleIsUserMenuOpen:false,
    mobileNavigationActive:false,
    userRole:store.get('userRole'),
    firstName:store.get('firstName')?store.get('firstName'):'Guest',
    lastName:store.get('lastName')?store.get('lastName'):''
  };
  handleNavigationToggle(){
    this.setState({mobileNavigationActive:!this.state.mobileNavigationActive})
    console.log('toggle navigation visibility '+this.state.mobileNavigationActive);
  }
  toggleIsUserMenuOpen(){
    
    this.setState({isUserMenuOpen:!this.state.isUserMenuOpen})
    console.log(this.state.isUserMenuOpen)
  }
  render() {
    const shop=Cookies.get("shopOrigin");
    const redirect = Redirect.create(app);
    const { Component, pageProps } = this.props;
    const{isUserMenuOpen,mobileNavigationActive,firstName,lastName}=this.state;
    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
          },
          {
            items: [{content: 'Signout', 
            onClick: ()=>{
              alert('sds')
              store.set('userRole','')
              redirect.dispatch(
                Redirect.Action.APP,'/'
              );
            },
          }],
          },
        ]}
        name={firstName}
        detail={firstName+' '+lastName}
        initials={firstName.charAt(0).toUpperCase()}
        open={isUserMenuOpen}
        onToggle={()=>this.toggleIsUserMenuOpen()}
      />
    );
    let  menuitems=[];
    if(this.state.userRole=='dropshipper'){
      menuitems=[
        {
          label: 'DropShipper Dashboard',
          icon: HomeMajorMonotone,
          onClick: ()=>{},
        },
        {
          label: 'Search Products',
          icon: SearchMajorMonotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/search'
            );
          },
        },
        {
          label: 'My Products',
          icon: ProductsMajorTwotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/my-products'
            );
          },
         
        },
        {
          label:'Manage Orders',
          icon:DraftOrdersMajorMonotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/manage-orders'
            );
          },
        },
        {
          label:'Pricing',
          icon:SettingsMajorMonotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/choose_plan'
            );
          },
        },
        {
          label:'Settings',
          icon:SettingsMajorMonotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/settings'
            );
          },
        },
        {
          label:'Signout',
          icon: CustomersMinor,
          onClick: ()=>{
            store.set('userRole','')
            redirect.dispatch(Redirect.Action.APP,'/');
          }
        }
      ];
       }else if(this.state.userRole=='seller'){
        menuitems=[
          {
            label: 'Seller Dashboard',
            icon: HomeMajorMonotone,
            url:'/',
          },
          {
            label: 'Selling Products',
            icon: OrdersMajorTwotone,
            onClick: ()=>{
              redirect.dispatch(
                Redirect.Action.APP,'/selling_products'
              );
            },
          },
          ,
        {
          label:'Settings',
          icon:SettingsMajorMonotone,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/settings'
            );
          },
        },
        {
          label:'Signout',
          icon: CustomersMinor,
          onClick: ()=>{
            store.set('userRole','')
            redirect.dispatch(Redirect.Action.APP,'/');
          },
        }
        ]
    }else{
      menuitems=[
       
        {
          label: 'SignIn',
          icon: CustomersMinor,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/'
            );
          },
        },
        {
          label: 'Signup',
          icon: CustomersMinor,
          onClick: ()=>{
            redirect.dispatch(
              Redirect.Action.APP,'/signup'
            );
          },
        }
      
      ]

    }
      const navigationMarkup = (
        <Navigation location="/">
          <Navigation.Section
            items={[
              {
                label: 'Back to Shopify',
                icon: ArrowLeftMinor,
              },
            ]}
          />
          <Navigation.Section
            separator
            title="Dropshipper App"
           
            items={menuitems}
            action={{
              icon: ConversationMinor,
              accessibilityLabel: 'Signout',
              onClick: ()=>{
                store.set('userRole','')
                store.set('firstName','Guest')
                store.set('lastName','')
                store.set('email','')
                store.set('username','')
                store.set('id','')
                redirect.dispatch(
                  Redirect.Action.APP,'/'
                );
              },
            }}
          />
        </Navigation>
      );
   
   
  
    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        onNavigationToggle={()=>this.handleNavigationToggle()}
        
      />
    );
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>dropshipper</title>
          <meta charSet="utf-8" />
        </Head> 
        <Provider config={config}>     
        <AppProvider  i18n={translations}>
        <Frame topBar={topBarMarkup} 
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={()=>this.handleNavigationToggle()}
        >
        <ApolloProvider client={client}>
            <Component {...pageProps} />

          </ApolloProvider>
         </Frame>
          </AppProvider> 
          </Provider>       
      </React.Fragment>
    );
  }
}
export default MyApp;