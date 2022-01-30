import React, {createContext, useState} from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const[totalPrice,setTotalPrice] = useState(0);
    const calculateTotal = () => {
        let total = 0;

        for (let index = 0; index < products.length; index++) {
            total = total + (products[index].price * products[index].quantity) ;
            
        }
        return total;
    }
    const addProducts = (item) =>{
        products.find(prod => prod.id == item.id) || setProducts([...products, item]);
        setTotalPrice(calculateTotal());

    };
    const deleteProduct = (id) => {
        let tempProducts = new Array();
        for (let index = 0; index < products.length; index++) {
            if(products[index].id != id){
                tempProducts.push(products[index]);
            }            
        }
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
        
        {console.log("render context")}
        <CartContext.Provider value ={data}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export {CartProvider}
export default CartContext