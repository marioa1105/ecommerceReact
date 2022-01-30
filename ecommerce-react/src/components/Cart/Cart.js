import { useContext, useState } from 'react'
import { Col, Row, Table, Button, Alert } from 'react-bootstrap'
import CartContext from '../../context/CartContext'
import ContactModal from '../ContactModal/ContactModal'
const Cart = () => {
    const {products, totalPrice, setProducts} = useContext(CartContext);
    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        console.log("show",show);
        setShow(!show)
    }
    const idOrden = (id) => {
        setProducts([]);
        setId(id);
    }
    return (
        <>
            {
                id != 0
                ? <Alert variant='primary'> Se genero la orden compra {id}</Alert>
                :
                 <>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Articulo</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => {
                                    return (
                                        <tr>
                                            <td>1</td>
                                            <td>{product.title}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price}</td>
                                        </tr>
                                    );
                                })}
                                
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Button onClick = {handleShow}>
                            Confirmar Compra
                        </Button>
                        <ContactModal products = {products} show = {show} handleShow = {handleShow} 
                                        total={totalPrice} idOrden={idOrden} />
                    </Col>
                </Row>
            </>
            }  
        </>
                                                      
        )
}

export default Cart