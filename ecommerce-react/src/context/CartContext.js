import React, {createContext, useState} from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [products, setData] = useState([]);
    const data = {
        products,
        setData
    }

    return (
        <CartContext.Provider value ={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext