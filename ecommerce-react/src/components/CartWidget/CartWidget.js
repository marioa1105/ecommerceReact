import React, {useState} from 'react'

import {BsCart4} from 'react-icons/bs'
import Cart from '../CartModal/CartModal.js'

const CartWidget = () => {
    const[showCart,setShowCart] = useState(false);
    const handleShowCart = () => {
        setShowCart(!showCart);
    }


    return (
        <div>
            <BsCart4 size={30} color="lightblue" onClick= {handleShowCart}/>
            {<Cart handleShowCart={handleShowCart} showCart={showCart}/>} 
        </div>
    );
}
export default CartWidget