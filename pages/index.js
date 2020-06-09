import React from 'react';
import {Page,FormLayout,Form, Link,Button, InlineError ,Select, Card, TextField, Layout,Toast} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
import { Redirect,Loading } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
//import {loadStripe} from '@stripe/stripe-js';
//import CardForm from '../components/CardForm';
import store from 'store-js';
const axios = require('axios')
//const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
export default class Singin extends React.Component {
  static contextType = Context;
  state = {  
      email:'',
      password:'',
      roleselected:'',
      emailisInvalid:false,
      isInvalidPassword:false,
      isInvalidRole:false,
      errorMessageEmail:'',
      errorMessagePassword:'',
      errorMessageRole:'',
      successMessageactive:false
    };
    toggleSuccessActive(){
      this.setState({successMessageactive:!this.state.successMessageactive})
   }
    handleSubmit(){  
      store.set('ids',[]);
      const{email,password,roleselected}=this.state;
    //  if(roleselected==''){
    //   this.setState({ isInvalidRole:true})
    //   return
    //  }
      const user={email:email,password:password,role:roleselected};
      const app = this.context;
      const redirect = Redirect.create(app);
      const loading = Loading.create(app);
      loading.dispatch(Loading.Action.START);
      //console.log([user])
      axios.post('https://aladdin-dropshipper-server.herokuapp.com/signin', {email:email,password:password,role:roleselected} )
      .then( (response)=>{
       
        this.setState({email:'',  password:'' })
        store.set('token',response.data.token)
        store.set('firstName',response.data.firstName)
        store.set('lastName',response.data.lastName)
        store.set('email',response.data.firstName)
        store.set('username',response.data.username)
        store.set('id',response.data._id)
        store.set('userRole',response.data.role)
         let url='/selling_products';
         if(response.data.role=='seller'){
          url='/selling_products';
         }else if(response.data.role=='dropshipper'){
          url='/search';
         }else{
           url='/';
         }
          redirect.dispatch( Redirect.Action.APP,url);
          //this.toggleSuccessActive();
      })
      .catch(function (error) {
        console.log(error);
      });   
     }

    handlePasswordChange(value){
      if(value.length < 3){
        this.setState({passwordisInvalid:true})
      }
      if(value.length > 3){
        this.setState({passwordisInvalid:false})
      }
     let errorMessage = this.state.passwordisInvalid
  ? 'Enter 3 or more characters'
  : '';

      console.log(value)
      this.setState({password:value,errorMessagePassword:errorMessage})
    }
    handleEmailChange(value){
      if(value.length < 3){
        this.setState({emailisInvalid:true})
      }
      if(value.length > 3){
        this.setState({emailisInvalid:false})
      }
     let errorMessage = this.state.emailisInvalid
  ? 'Enter 3 or more characters '
  : '';

      console.log(value)
      this.setState({email:value,errorMessageEmail:errorMessage})
  }
     
  handleRoleChange(value){
    console.log(value)
    this.setState({roleselected:value})
  }
    render() {
      const{email,password,roleselected,errorMessageEmail,errorMessagePassword,errorMessageRole,isInvalidPassword,emailisInvalid,successMessageactive,isInvalidRole }=this.state;
      const toastMarkup = successMessageactive ? (
        <Toast content=" Successfully Signin" onDismiss={()=>this.toggleSuccessActive()} />
      ) : null;
    return (
      <Page title="Signin" separator>  
      {toastMarkup}   
<Form onSubmit={()=>this.handleSubmit()}>
    <FormLayout>
    
   
   
      <TextField
        value={email}
        onChange={(value) => this.handleEmailChange(value)}
        label="Email"
        type="email"
        error={emailisInvalid}
        id="email"
        helpText={
          <span>
            Enter your email Address.
          </span>
        }
      />
        <div style={{marginTop: '4px'}}>
        <InlineError message={errorMessageEmail} fieldID={'email'} />
      </div>
           <TextField
        value={password}
        onChange={(value) => this.handlePasswordChange(value)}
        label="Password"
        type="password"
        error={isInvalidPassword}
        id="password"
        helpText={
          <span>
            Enter your Password.
          </span>
        }
      />
       <div style={{marginTop: '4px'}}>
        <InlineError message={errorMessagePassword} fieldID={'password'} />
      </div>
      {/* <Select
      label="Select Role"
      options={[
        {label: 'Select Role', value: ''},
        {label: 'Seller', value: 'seller'},
        {label: 'DropShipper', value: 'dropshipper'},
      ]}
      id="role"
      error={isInvalidRole}
      selected={roleselected}
      onChange={(value)=>this.handleRoleChange(value)}
    /> 
        <div style={{marginTop: '4px'}}>
        <InlineError message={'Select Role '} fieldID={'role'} />
      </div>*/}

      <Button submit>Sign In</Button>
      <Link url="/signup">Not Resgistered?</Link>
         </FormLayout>
  </Form>
      </Page>
    );

    }
    
}