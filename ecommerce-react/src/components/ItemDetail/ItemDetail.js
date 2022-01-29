import { useState, useContext } from 'react'

import { BsCart4 } from 'react-icons/bs'
import { Row, Col, Button, Card } from 'react-bootstrap'

import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
const ItemDetail = ({ item }) => {
    const [countCart, setCountCart] = useState(0)
    const { products, addProducts } = useContext(CartContext);
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
    const handleAddItemCart = () => {
        console.log("Producto click =>", products)
        addProducts(itemCart);
    }
    return (
        <Row>
            <Col xs={6}>
                <Card>
                    <Card.Img variant="top" src={`../../assets/${item.pictureUrl}`} alt={item.title} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Precio: {item.price}</Card.Subtitle>
                        <Card.Text>
                            <ItemCount stock={item.stock} addCountCart={addCountCart} />
                            
                            
                        </Card.Text>    
                        <div className='btn-Add'>
                            <Button variant="outline-primary" onClick={handleAddItemCart}>
                                <BsCart4 size={25} />
                                Agregar al Carrito
                            </Button>
                        </div>
                        
                    </Card.Body>
                </Card>                
            </Col>
        </Row>


    )
}

export default ItemDetail