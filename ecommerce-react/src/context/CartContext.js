import React, {createContext, useState} from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const addProducts = (item) =>{
        console.log(products.find(prod => prod.id == item.id));
        products.find(prod => prod.id == item.id) || setProducts([...products, item]);
        
            
    };
    const data = {
        products,
        addProducts
    }
    
    return (
        <>
        
        {console.log("render context")}
        <CartContext.Provider value ={data}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export {CartProvider}
export default CartContext