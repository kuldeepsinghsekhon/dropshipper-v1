import React from 'react';
import {Page,FormLayout,Form, Link,Button, InlineError ,Select, Toast, TextField,Caption, DropZone, Stack, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
import { Redirect,Loading } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import store from 'store-js';
const axios =require('axios');

export default class Singup extends React.Component {
  static contextType = Context;
    state = {
      firstName:'',
      lastName:'',
        email:'',
        password:'',
        roleselected:'',
        emailisInvalid:false,
        firstNameisInvalid:false,
        lastNameisInvalid:false,
        isInvalidPassword:false,
        role:'dropshipper',
        errorMessage :'',
        errorMessagefirstName:'',
        errorMessagelastName:'',
        errorMessageEmail:'',
        errorMessagePassword:'',
        errorMessageRole:'',
        successMessageactive:false,
        file:undefined
      };
   toggleSuccessActive(){
      this.setState({successMessageactive:!this.state.successMessageactive})
   }
   onmessageDissmiss(){
    this.setState({successMessageactive:!this.state.successMessageactive})
    const app = this.context;
    const redirect = Redirect.create(app);
    redirect.dispatch( Redirect.Action.APP,'/'); 
   }
   handleDropZoneDrop(_dropFiles, acceptedFiles, _rejectedFiles) {
    this.setState({file:acceptedFiles[0]})
    
}
      handleSubmit(){
        const app = this.context;
        const redirect = Redirect.create(app);
        const loading = Loading.create(app);
        loading.dispatch(Loading.Action.START);
        const options = {
          headers: {
              'Content-Type': 'application/json',
          }
        };
        let url="https://aladdin-dropshipper-server.herokuapp.com/signup";
        const{firstName,lastName,email,password,roleselected}=this.state;
        const user={"firstName":firstName,"lastName":lastName,"email":email,"password":password,"role":roleselected,"password2":password};
        //console.log(user)
        const formData = new FormData();
        if(roleselected=='seller'){
          formData.append( 
            "myFile", 
            this.state.selectedFile, 
           // this.state.selectedFile.name 
          ); 
        }
       
        axios.post(url,user).then( ( response ) => {
         // console.log(response.data )
         // store.set('user',response.data)
            this.setState({firstName:'',lastName:'',email:'',  password:'', });
            
            this.toggleSuccessActive();   
              
        } ).catch(function (error) {
          //console.log(error);
        })
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
    handlefirstNameChange(value){
      if(value.length < 3){
        this.setState({firstNameisInvalid:true})
      }
      if(value.length > 3){
        this.setState({firstNameisInvalid:false})
      }
     let errorMessage = this.state.firstNameisInvalid
  ? 'Enter 3 or more characters '
  : '';

      console.log(value)
      this.setState({firstName:value,errorMessagefirstName:errorMessage})
  }
  handlelastNameChange(value){
    if(value.length < 3){
      this.setState({lastNameisInvalid:true})
    }
    if(value.length > 3){
      this.setState({lastNameisInvalid:false})
    }
   let errorMessage = this.state.lastNameisInvalid
? 'Enter 3 or more characters '
: '';

    console.log(value)
    this.setState({lastName:value,errorMessagefirstName:errorMessage})
}
    handleRoleChange(value){
      this.setState({roleselected:value})
      console.log(this.state.roleselected)
    }
       
    render() {
        const{firstName,lastName,email,password,roleselected,errorMessagefirstName,errorMessagelastName,errorMessageEmail,errorMessagePassword,errorMessageRole,firstNameisInvalid,lastNameisInvalid,isInvalidPassword,emailisInvalid,successMessageactive }=this.state;
        const toastMarkup = successMessageactive ? (
          <Toast content="Registered Successfully Please go to signin " onDismiss={()=>this.onmessageDissmiss()} />
        ) : null;
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        const{file}=this.state;
        const fileUpload = !file && <DropZone.FileUpload />;
        const uploadedFile = file && (
          <Stack>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.indexOf(file.type) > 0
                  ? window.URL.createObjectURL(file)
                  : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
              }
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>  <p>{file.path}</p>
            </div>
          </Stack> );
    return (
        <Page title="Signup" separator>  
        {toastMarkup}   
 <Form onSubmit={()=>this.handleSubmit()}>
      <FormLayout>
      <TextField
          value={firstName}
          onChange={(value) => this.handlefirstNameChange(value)}
          label="FirstName"
          type="text"
          error={firstNameisInvalid}
          id="firstname"
          helpText={
            <span>
              Enter your First Name.
            </span>
          }
        />
         <div style={{marginTop: '4px'}}>
          <InlineError message={errorMessagefirstName} fieldID={'firstname'} />
        </div>
        <TextField
          value={lastName}
          onChange={(value) => this.handlelastNameChange(value)}
          label="FirstName"
          type="text"
          error={lastNameisInvalid}
          id="lasttname"
          helpText={
            <span>
              Enter your Last Name.
            </span>
          }
        />
          <div style={{marginTop: '4px'}}>
          <InlineError message={errorMessagelastName} fieldID={'lasttname'} />
        </div>
     
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
        <Select
        label="Select Role"
        options={[
            {label: 'Select Role', value: ''},
          {label: 'Seller', value: 'seller'},
          {label: 'DropShipper', value: 'dropshipper'},
        ]}
        id="role"
        selected={roleselected}
        onChange={(value)=>this.handleRoleChange(value)}
      />
          <div style={{marginTop: '4px'}}>
          <InlineError message={errorMessageRole} fieldID={'role'} />
        </div>
        {roleselected=='seller'?(
        <DropZone onDrop={(_dropFiles, acceptedFiles, _rejectedFiles)=>this.handleDropZoneDrop(_dropFiles, acceptedFiles, _rejectedFiles)}>
    {uploadedFile}
      {fileUpload}
  </DropZone>):('')}

        <Button  submit>Signup</Button>
        <Link url="/index">Already Resgistered?</Link>
           </FormLayout>
    </Form>
        </Page>

    );

    }
    
}