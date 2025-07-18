import {
    Banner,
    Card,
    DisplayText,
    Form,
    FormLayout,
    Frame,
    Layout,
    Page,
    PageActions,
    TextField,
    Toast,
  } from '@shopify/polaris';
  import store from 'store-js';
  import gql from 'graphql-tag';
  import { Mutation } from 'react-apollo';
  
  const UPDATE_PRICE = gql`
  mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
        title
        descriptionHtml
        vendor
        tags
        productType
      }
      
      shop {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  `;
  
  class EditProduct extends React.Component {
    state = {
        title:'',
        commission: '',
      price: '',
      variantId: '',
      showToast: false,
      item:store.get('item'),
    };
  
    componentDidMount() {
      this.setState({ commission: this.itemToBeConsumed() });
    }
  
    render() {
      const { title, price, commission,item } = this.state;
      const images =item.images.map((image)=>{
        const container = {};
        container.src = image;
        return container;
      
      })
      return (
        <Mutation
          mutation={UPDATE_PRICE}
        >
          {(handleSubmit, { error, data }) => {
              console.log(data);
          
            const showError = error && (
              <Banner status="critical">{error.message}</Banner>
            );
            const showToast = data && data.productCreate && (
              <Toast
                content="Sucessfully Imported"
                onDismiss={() => this.setState({ showToast: false })}
              />
            );
            return (
              <Frame>
                <Page>
                  <Layout>
                    {showToast}
                    <Layout.Section>
                      {showError}
                    </Layout.Section>
                    <Layout.Section>
                      <DisplayText size="large">{title}</DisplayText>
                      <Form>
                        <Card sectioned>
                          <FormLayout>
                            <FormLayout.Group>
                              <TextField
                                prefix="$"
                                value={price}
                                disabled
                                label="Original price"
                                type="price"
                              />
                              <TextField
                                prefix="$"
                                value={commission}
                                onChange={this.handleChange('commission')}
                                label="Increase price"
                                type="commission"
                              />
                            </FormLayout.Group>
                            <p>
                              This sale price will expire in two weeks
                          </p>
                          </FormLayout>
                        </Card>
                        <PageActions
                          primaryAction={[
                            {
                              content: 'Save',
                              onAction: () => {
                                // const productVariableInput = {
                                //   id: variantId,
                                //   price: discount,
                                // };
                                const ProductInput= {
                                      "title": item.title,
                                      "descriptionHtml": item.body_html,
                                      "vendor": "dropShipper",
                                      "tags": [
                                        "dfsf",
                                        "dsfdsf"
                                      ],
                                      "productType":item.product_type,
                                      "published":true,
                                      "options":["Size"],
                                      "variants":[
                                        {
                                          "barcode":"123",
                                          "price":price,
                                          "sku":"abc123",
                                          "options":[
                                            "42"
                                          ]
                                        }
                                      ],
                                      "images":images
                                  
                                  };
                                handleSubmit({
                                  variables: { input: ProductInput },
                                });
                              },
                            },
                          ]}
                        //   secondaryActions={[
                        //     {
                        //       content: 'Remove discount',
                        //     },
                        //   ]}
                        />
                      </Form>
                    </Layout.Section>
                  </Layout>
                </Page>
              </Frame>
            );
          }}
        </Mutation>
      );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  
    itemToBeConsumed = () => {
      const item = store.get('item');
      
      const price = item.price;
      //const variantId = item.variants.edges[0].node.id;
      const commission = price * 0.1;
      this.setState({ price});
      return (price + commission).toFixed(2);
    };
  }
  
  export default EditProduct;