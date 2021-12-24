import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Item = ({item}) => {
    const addCount = () => {};
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={`../../assets/${item.pictureUrl}`} style={{height:180}} />
            <Card.Body>
                <Card.Title>
                    {item.title} $ {item.price}
                </Card.Title>
            </Card.Body>                                    
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <ItemCount stock = {item.stock} addCountCart={addCount}/>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/item/${item.id}`}>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Button variant="link" >Ver detalle</Button> 
                            </Col>                            
                        </Row>
                    </Link> 
                </ListGroupItem>                    
            </ListGroup>
                               
                
        </Card>
    )
}

export default Item