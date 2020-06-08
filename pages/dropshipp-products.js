import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
  } from '@shopify/polaris';
  
  class ExportProducts extends React.Component {
    
    render() {
        return (
            <Page>
                <Layout>
                <Layout.Section>
                <Card title="Products" sectioned>
                <p>Choose Products You want to sale</p>
                </Card>
           </Layout.Section>
            </Layout>
            </Page>
          );
        }
    }
        export default ExportProducts;