import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import './Item.css'
const Item = ({item}) => {
    const addCount = () => {};
    return (
        <Card key = {item.id}>
            <CardContent>
                <div className="card-stock">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Stock: {item.stock}
                    </Typography>                                           
                </div>                                
                <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={`../../assets/${item.pictureUrl}`}
                    alt={item.title}
                />               
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.title} $ {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/item/${item.id}`}>
                    <Button>Ver</Button> 
                </Link>                
                <ItemCount stock = {item.stock} addCountCart={addCount}/>
            </CardActions>                        
        </Card>
    )
}

export default Item