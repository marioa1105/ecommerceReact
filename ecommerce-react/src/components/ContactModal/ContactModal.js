import { useState } from 'react';
import { Modal, Button,FloatingLabel, Form } from 'react-bootstrap'
import OrdenesDAO from '../../API/OrdenesDAO';
const ContactModal = ({ products, show,handleShow, total, idOrden }) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email:''
    });
    const handleOnChange = (e) =>{
        let {name,value} = e.target;
        setForm({...form, [name] : value})        
    }
    const handleOnClick = async () => {
        let order = {
            buyer: form,
            items: products,
            total: total
        }
        
        let id = await OrdenesDAO.saveOrder(order);
        idOrden(id);
        handleShow();
        
    }
    return (
        <>
            <Modal show={show} onHide={handleShow} >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <FloatingLabel controlId="name" label="Nombre">
                                <Form.Control  type="text" placeholder="Nombre" name="name" onChange = {handleOnChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel controlId="phone" label="Telefono">
                                <Form.Control type="text" placeholder="Telefono" name="phone" onChange = {handleOnChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel controlId="phone"
                                            label="Email"
                                            className="mb-3">
                                <Form.Control  type="email" placeholder="name@example.com" name="phone" onChange = {handleOnChange} />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleOnClick} >
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

export default ContactModal