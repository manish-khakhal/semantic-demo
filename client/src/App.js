import React,{useState} from 'react';
import './App.css';


import MyGarage from './components/MyGarage.js';
import GarageSale from './components/GarageSale.js';
import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import ShoppingCart from './components/ShoppingCart.js';

import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer.js';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
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
    //<ApolloProvider client={client}>
      <div className="App">
        <ApolloProvider client={client}>
          <NavBar pages={pages} setPage={setPage}/>
          {page}
          <Footer />
        </ApolloProvider>

      </div>
    //</ApolloProvider>

   );
}
  
export default App;
  
  