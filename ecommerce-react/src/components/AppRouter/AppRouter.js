import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../../pages/Home/HomePage';
import DetailPage from '../../pages/Detail/DetailPage';
import CartPage from '../../pages/Cart/CartPage';
import React, {useContext} from 'react';
import {CartProvider} from '../../context/CartContext'

import Container from 'react-bootstrap/esm/Container';
import './AppRouter.css'
export default function AppRouter() {
    return (
    <BrowserRouter>
        <CartProvider>           
            <nav>
                <NavBar/>
            </nav> 
            <Container className='body-page'>
                <Routes>
                    <Route path ='/' element = {<HomePage/>}/>
                    <Route path ='/item/:id' element = {<DetailPage/>}/>            
                    <Route path ='/category/:id' element = {<HomePage/>}/>            
                    <Route path ='/Cart' element = {<CartPage/>}/> 
                </Routes>
            </Container>    
        </CartProvider>
                                  
    </BrowserRouter>   )
}