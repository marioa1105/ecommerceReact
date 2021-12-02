
import react, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import CircularProgress from '@mui/material/CircularProgress';
const dataItems = [{
    id:1,
    title: "Kit mancuernas",
    price:9200,
    stock:10,
    pictureUrl:'kitmancuernas.jpg'
},
{
    id:2,
    title: "Tobilleras",
    price:600,
    stock:20,
    pictureUrl:'tobilleras.jpg'
},
{
    id:3,
    title: "Colchoneta",
    price:1000,
    stock:15,
    pictureUrl:'colchoneta.jpg'
}]
const getDataProduct = new Promise((resolve, reject) => {            
    setTimeout(() =>{
        
        resolve(dataItems);
    }, 2000)
});

const ItemListContainer = ()=>{
    const [items, setItems]= useState([]);
    
    
    useEffect(() => {
        getDataProduct.then(data => {
            setItems(data)
        });
        
    },[]);

    return(        
        <div>
            
            {
               
                
                items.length > 0 
                ? <ItemList items={items}/>
                : <CircularProgress />
            }
            
        </div>
    )
}

export default ItemListContainer