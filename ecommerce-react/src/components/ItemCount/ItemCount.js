import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemCount = ({ stock , addCountCart, removeCountCart}) => {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        
        if(count < stock) {
            setCount(count + 1)
            addCountCart(count + 1)
        }
    }
    const onRemove = () => {
        if(count > 0) {
            setCount(count - 1);
            removeCountCart(count - 1);
        } 
    }
    
    return (
        <>        
            <Row>
                <Col>
                    <InputGroup>     
                        <InputGroup.Text id="btnGroupRemoveon" onClick={onRemove}>-</InputGroup.Text> 
                        <FormControl
                            className='text-center'
                            type="label"                    
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon"
                            value={count}
                            readOnly
                        />
                        <InputGroup.Text id="btnGroupAddon" onClick={onAdd}>+</InputGroup.Text>                                                 
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    
                </Col>
                
            </Row>
        </>

    );
}

export default ItemCount;