import Product from "../components/Product";
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
  const products = [

    {
      id: 1,
      name: "Apple",
      description: "Red apples",
      img: "https://tachyons.io/img/avatar_1.jpg",
      price: 100
    },
  
    {
      id: 2,
      name: "A Cat",
      description: "CCO (Chief Cat Officer)",
      img: "https://tachyons.io/img/avatar_1.jpg",
      price: 100
    },
  
  
    {
      id: 3,
      name: "Milk",
      description: "Milk for the lactose tollerent",
      img: "https://tachyons.io/img/avatar_1.jpg",
      price: 100
    },
  
    {
      id: 4,
      name: "Banana",
      description: "I need those carbs",
      img: "https://tachyons.io/img/avatar_1.jpg",
      price: 100
    },
  
  
    {
      id: 5,
      name: "Orange",
      description: "Orange are orange",
      img: "https://tachyons.io/img/avatar_1.jpg",
      price: 100
    }
  
  ];

  class ExploreProducts extends React.Component {
   
    render() {
        return (
            <Page>
                <Layout>
                <Layout.Section>
                {
                   products.map(p => <Product key={p.id} {...p} />)
              }
           </Layout.Section>
            </Layout>
            </Page>
          );
        }
    }
        export default ExploreProducts;