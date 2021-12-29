import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import dataItems from '../../API/DataItems.json'
import CircularProgress from '@mui/material/CircularProgress';

const getDataProduct = (id) => 
{
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                let data = dataItems.find(item => item.id == id);
                console.log(data);
                resolve(data)
                },2000)
    })
}

const ItemDetailContainer = () => {
    const {id} = useParams();
    useEffect(()=>{
      getDataProduct(id).then(response => {
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