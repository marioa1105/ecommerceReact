import React from 'react'
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({ items }) => {
    {
        if (items.length == 0){
            return (                
                <Row>
                    <Col/>
                    <Col>
                        <h1>No existen productos.</h1>
                    </Col>
                    <Col/>                    
                </Row>                
            )
        }
        else{
            return (
            
                <Row className="justify-content-md-center">                    
                    {items.map(item => {
                        return  <Col md="auto" key={item.id}> <Item item={item} key= {item.id}/> </Col>                                                                                                            
                    })}
                                   
                </Row>
            )
        }
        
    }
}

export default ItemList