import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from '../../logo.png'
export default () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <div className="logo">
                        <img
                            src={logo} alt="logo"                            
                        />
                    </div>


                </Navbar.Brand>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Indumentaria</Nav.Link>
                        <Nav.Link href="#">Equipamiento</Nav.Link>
                        <Nav.Link href="#">Accesorios</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}