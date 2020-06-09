import React from 'react';
import {Page,CalloutCard,List, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../components/CardForm';
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default class choose_plan extends React.Component {
    render() {
    return (
        <Page>
            <Layout>
  <Layout.Section oneThird>
  <CalloutCard
  title="Free Plan"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'Select',
    url: 'https://www.shopify.com',
  }}
>
<List type="bullet">
  <List.Item>Feature one</List.Item>
  <List.Item>Feature Two</List.Item>
  <List.Item>Feature Three</List.Item>
  <List.Item>Feature Four</List.Item>
  <List.Item>Feature Five</List.Item>

</List>
</CalloutCard>
  </Layout.Section>

  <Layout.Section oneThird>
  <CalloutCard
  title="Basic Plan"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'Upgrade Now',
    url: 'https://www.shopify.com',
  }}
>
<List type="bullet">
  <List.Item>Feature one</List.Item>
  <List.Item>Feature Two</List.Item>
  <List.Item>Feature Three</List.Item>
  <List.Item>Feature Four</List.Item>
  <List.Item>Feature Five</List.Item>

</List>
</CalloutCard>
  </Layout.Section>
  <Layout.Section oneThird>
  <CalloutCard
  title="Unlimited Plan"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'Upgrade Now',
    url: 'https://www.shopify.com',
  }}
>
<List type="bullet">
  <List.Item>Feature one</List.Item>
  <List.Item>Feature Two</List.Item>
  <List.Item>Feature Three</List.Item>
  <List.Item>Feature Four</List.Item>
  <List.Item>Feature Five</List.Item>

</List>
</CalloutCard>
  </Layout.Section>
</Layout>

  
 
        </Page>

    );
    }
}