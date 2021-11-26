import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);

    const onAdd = () =>{
        count < stock && setCount(count + 1)
    }
    const onRemove = () =>{
        count > 0 && setCount(count - 1)
    }
    return(
        <div>
            <p>Producto ItemCount </p>
            <IconButton color="primary" onClick={onRemove}> 
                <RemoveOutlinedIcon/>
            </IconButton>   
            <Typography> {count} </Typography>           
            <IconButton color="primary" onClick={onAdd}>                 
                <AddOutlinedIcon/>
            </IconButton>            
            <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                Agregar
            </Button>
        </div>
        
    );
} 

export default ItemCount;