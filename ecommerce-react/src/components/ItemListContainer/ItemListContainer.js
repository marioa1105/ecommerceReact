
import react, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import dataItems from '../../API/DataItems.json'
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