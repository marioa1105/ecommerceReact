import React from 'react';
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png'
import './NavBar.css'
import {Link} from 'react-router-dom'
export default () => {
    return (
        <div>
            <AppBar
                color='inherit'
            >
                <nav>
                    <div className="logo">
                        <Link to='/'>
                            <a href="#"> <img src={logo}></img> </a>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to='/'>
                                <Button href="#">Indumentaria</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <Button href="#">Equipamiento</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <Button href="#">Accesorios</Button>
                            </Link>
                        </li>
                    </ul>
                    <a href="#"><CartWidget/></a>
                    
                </nav>
                
            </AppBar>


        </div>

    )
}