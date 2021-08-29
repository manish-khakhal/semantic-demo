import React,{useState} from 'react';
import './App.css';


import MyGarage from './components/MyGarage.js';
import GarageSale from './components/GarageSale.js';
import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import ShoppingCart from './components/ShoppingCart.js';

import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer.js';
/*import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';*/

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//import { setContext } from '@apollo/link-context';
const httpLink = createHttpLink({
  uri: '/graphql',
});


/*const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});*/

const authLink = setContext(({ headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  //I can put as much stuff here as I want
  const pages =[
  
  <HomePage/>,
  
  
  <MyGarage/>,
  <GarageSale/>,
  <ShoppingCart/>,

  ]
  const[page, setPage]= useState (
  pages[0]
  
  )
  

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar pages={pages} setPage={setPage}/>
        {page}
        <Footer />
      </div>
    </ApolloProvider>

   );
}
  
export default App;
  
  