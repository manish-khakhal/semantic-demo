import React,{useState} from 'react';
import './App.css';


import MyGarage from './components/MyGarage.js';
import GarageSale from './components/GarageSale.js';
import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import ShoppingCart from './components/ShoppingCart.js';

import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer.js';







<<<<<<< HEAD


=======
>>>>>>> parent of ebb636b (Added folders client and server)
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
      <div className="App">
<<<<<<< HEAD


  
  <NavBar pages={pages} setPage={setPage}/>

  
=======
  
  <NavBar pages={pages} setPage={setPage}/>
>>>>>>> parent of ebb636b (Added folders client and server)
  
  {page}
  

  <Footer />
       
      </div>






    );
  }
  
  export default App;
  
  