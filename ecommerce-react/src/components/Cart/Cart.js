import { useContext, useState } from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'
import CartContext from '../../context/CartContext'
import ContactModal from '../ContactModal/ContactModal'
const Cart = () => {
    const {products, totalPrice} = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    return (
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
                    <ContactModal products = {products} show = {show} handleShow = {handleShow} total={totalPrice} />
                </Col>
            </Row>
        </>)
}

export default Cart