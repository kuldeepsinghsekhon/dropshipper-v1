import React from 'react';
import {Page,Avatar,Filters, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';

export default class Plans extends React.Component {
    render() {
    return (
        <Page>
            
    <Elements stripe={stripePromise}>
      <CardForm/>
    </Elements>
 
        </Page>

    );
    }
}