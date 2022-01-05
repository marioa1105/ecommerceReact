import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import ProductosDAO from '../../API/ProductosDAO'
import CircularProgress from '@mui/material/CircularProgress';



const ItemDetailContainer = () => {
    const {id} = useParams();
    useEffect(()=>{
      ProductosDAO.getProductById(id).then(response => {
          setProduct(response)
      })  
    },[id]);

    const [product, setProduct] = useState({})
    return (
    <div>  
        
        {            
            Object.keys(product).length > 0 ? <ItemDetail item={product}/>: <CircularProgress/>
        }
        
    </div>)
}

export default ItemDetailContainer