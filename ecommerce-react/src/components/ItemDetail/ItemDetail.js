import Grid from '@mui/material/Grid'
import { useState , useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {BsCart4} from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import Button from 'react-bootstrap/Button'
const ItemDetail = ({item}) => {
    const [countCart, setCountCart] = useState(0)
    const {products, addProducts} = useContext(CartContext);
    const itemCart = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 0
    }
    const addCountCart = (count) => {
        itemCart.quantity = count;
        setCountCart || setCountCart(count);
    }
    const handleAddItemCart = () =>{    
        console.log("Producto click =>",products)            
        addProducts(itemCart);
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
                        <ItemCount stock={item.stock} addCountCart = {addCountCart}  />
                        <Button variant="outline-primary" onClick = {handleAddItemCart}>
                            <BsCart4 size={25}/>
                            Agregar al Carrito
                        </Button> 
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default ItemDetail