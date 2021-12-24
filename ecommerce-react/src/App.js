
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import React,{ useContext } from 'react';
import {CartProvider} from './context/CartContext'
function App() {
  
  return (
    <CartProvider>     
      <AppRouter/>    
      
            
    </CartProvider>
  );
}

export default App;
