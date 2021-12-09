import '../styles/globals.css'
import { ApolloProvider, ApolloClient,  InMemoryCache } from '@apollo/client';
import Navbar from '../componentes/navbar';


const client = new ApolloClient({
  uri: "https://sistema-de-aprobacion-de-empresas.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
          <Navbar/>
          <Component {...pageProps} />
          
    </ApolloProvider>
  );
}

export default MyApp;