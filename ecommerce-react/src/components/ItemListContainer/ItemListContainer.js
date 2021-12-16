
import react, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import dataItems from '../../API/DataItems.json'
import { useParams } from 'react-router-dom';
const getDataProduct = (id) => {
    return new Promise((resolve, reject) => {            
        setTimeout(() =>{
            
            let data = id ?dataItems.filter(item => item.category.id == id):dataItems;
            
            resolve(data);
        }, 2000)
    });
}

const ItemListContainer = ()=>{
    const [items, setItems]= useState([]);
    const {id} = useParams();
    const [progressVisible, setProgressVisible] = useState(true);

    const fillItems = () => {
        setProgressVisible(true)
        getDataProduct(id).then(data => {
            setItems(data)
            setProgressVisible(false)
        });
    }

    useEffect(() => {
        fillItems();        
    },[]);
    useEffect(() => {        
        fillItems();        
    },[id]);


    return(        
        <div>
            
            {                               
                progressVisible?<CircularProgress /> :<ItemList items={items}/>                
            }
            
        </div>
    )
}

export default ItemListContainer