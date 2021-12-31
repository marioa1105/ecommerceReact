import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {BsFillTrashFill} from 'react-icons/bs'


const CartItems = ({ products, totalPrice, deleteProduct }) => {
    const handlelDelete = (id) => {
        console.log("click", id)
    }
    
    return (
        <>
                <ListGroup className="list-group-flush">
                    {products.map(product => {
                        return (
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Cantidad:{product.quantity} ${product.price} </Card.Subtitle>                                    
                                            </Card.Body>
                                        </Card>                          
                                    </Col>
                                    <Col>
                                        <Button variant="outline-primary" onClick={ () => deleteProduct (product.id)}>
                                            <BsFillTrashFill/>
                                        </Button>
                                        
                                            
                                    </Col>
                                </Row>
                                  
                            </ListGroupItem>
                        )
                    })}
                    <ListGroupItem active>
                        Total: $ {totalPrice}
                    </ListGroupItem>
                </ListGroup>
                
                <Button variant="dark" size="lg">
                    FINALIZAR COMPRA
                </Button>
                
            
            
        </>
    )
}

export default CartItems