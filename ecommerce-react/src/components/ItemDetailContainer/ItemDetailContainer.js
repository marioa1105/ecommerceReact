import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
const data = {
    id:1,
    title: "Kit mancuernas",
    price:9200,
    stock:10,
    pictureUrl:'kitmancuernas.jpg'
}

const getDataProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    },2000)
})

const ItemDetailContainer = () => {
    useEffect(()=>{
      getDataProduct.then(response => {
          setProduct(response)
      })  
    },[]);

    const [product, setProduct] = useState({})
    return (
    <div>  
        <ItemDetail item={product}/>
    </div>)
}

export default ItemDetailContainer