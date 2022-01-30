import React from 'react';
import logo from '../../logo.png'
import CartWidget from '../CartWidget/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
export default () => {
    return (        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>                        
                            <img className='logo' src={logo}></img>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="justify-content-end">
                        
                        <Nav.Link>
                            <Link to='/category/indumentaria'>Indumentaria</Link>
                        </Nav.Link>
                                                
                        <Nav.Link>
                            <Link to="/category/equipamiento">Equipamiento</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/category/accesorios'>Accesorios</Link>

                        </Nav.Link>
                                                
                        <Nav.Link>                            
                            <CartWidget/>                            
                        </Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>                        
    )
}