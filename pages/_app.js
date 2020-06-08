import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
<<<<<<< HEAD
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

=======
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
>>>>>>> parent of 81c4ed9...  Resource picker
class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
<<<<<<< HEAD
        <Provider config={config}>
          <AppProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
=======
        <AppProvider i18n={translations}>
        <Component {...pageProps} />
        </AppProvider>
         
>>>>>>> parent of 81c4ed9...  Resource picker
      </React.Fragment>
    );
  }
}

export default MyApp;