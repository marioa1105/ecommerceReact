import { useContext, useState } from 'react'
import { Col, Row, Table, Button, Alert } from 'react-bootstrap'
import CartContext from '../../context/CartContext'
import ContactModal from '../ContactModal/ContactModal'
const Cart = () => {
    const {products, totalPrice} = useContext(CartContext);
    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    const idOrden = (id) => {
        setId(id);
    }
    return (
        <>
            {
                id != 0
                ? <Alert variant='primary'> Se genero la orden compra {id}</Alert>
                : <Alert variant='primary'> Esta en 0</Alert>
            }  
        </>
                                                      
        )
}

export default Cart