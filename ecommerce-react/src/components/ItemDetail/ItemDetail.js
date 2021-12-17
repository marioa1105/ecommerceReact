import Grid from '@mui/material/Grid'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({item}) => {
    const [countCart, setCountCart] = useState(0)
    const addCountCart = (count) => {
        setCountCart || setCountCart(count);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img src={`../../assets/${item.pictureUrl}`} alt={item.title}/>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <h1>{item.title}</h1>
                        Precio: {item.price}
                        <ItemCount stock={item.stock} addCountCart = {addCountCart} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ItemDetail