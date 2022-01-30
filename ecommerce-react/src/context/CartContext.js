import React, {createContext, useState} from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const[totalPrice,setTotalPrice] = useState(0);
    const calculateTotal = (items) => {
        let total = 0;

        for (let index = 0; index < items.length; index++) {
            total = total + (items[index].price * items[index].quantity);  
            
        }
        return total;
    }
    const addProducts = (item) =>{
        setTotalPrice(calculateTotal([...products, item]));
        products.find(prod => prod.id == item.id) || setProducts([...products, item]);               

    };
    const deleteProduct = (id) => {
        let tempProducts = new Array();
        for (let index = 0; index < products.length; index++) {
            if(products[index].id != id){
                tempProducts.push(products[index]);
            }            
        }
        setTotalPrice(calculateTotal(tempProducts));
        setProducts(tempProducts)
    }
    const data = {
        products,        
        totalPrice,
        addProducts,
        deleteProduct,
        setProducts
    }
    
    return (
        <>
        
        
        <CartContext.Provider value ={data}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export {CartProvider}
export default CartContext