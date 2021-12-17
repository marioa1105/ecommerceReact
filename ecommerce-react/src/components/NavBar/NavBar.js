import React from 'react';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
    return (        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>                        
                            
                        </Navbar.Brand>
                    </Link>
                    <Nav className="justify-content-end">
                        <Link to='/category/1'>
                            <Nav.Link>Indumentaria</Nav.Link>
                        </Link>
                        <Link to="/category/2">
                            <Nav.Link>Equipamiento</Nav.Link>
                        </Link>
                        <Link to='/category/3'>
                            <Nav.Link>Accesorios</Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>                        
    )
}