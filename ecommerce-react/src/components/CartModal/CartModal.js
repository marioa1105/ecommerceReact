import { useState, useContext } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CartContext from '../../context/CartContext'
import CartItems from '../CartItems/CartItems'

const CartModal = ({handleShowCart, showCart}) => {
    const {products, totalPrice,deleteProduct} = useContext(CartContext);
    const handleShow = () => {
        handleShowCart();
    }
    return (
        <>
            <Offcanvas show={showCart}  placement='end' onHide={handleShow}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        products.length == 0
                        ?<h1>El carrito esta vacio</h1>
                        :<CartItems products = {products} totalPrice={totalPrice} deleteProduct ={deleteProduct}/>
                    }
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default CartModal