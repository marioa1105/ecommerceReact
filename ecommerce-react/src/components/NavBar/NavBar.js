import React from 'react';
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png'
import './NavBar.css'
export default () => {
    return (
        <div>
            <AppBar
                color='inherit'
            >
                <nav>
                    <div className="logo">
                        <a href="#"> <img src={logo}></img> </a>
                    </div>
                    <ul>
                        <li>
                            <Button href="#">Indumentaria</Button>
                        </li>
                        <li>
                            <Button href="#">Equipamiento</Button>
                        </li>
                        <li>
                            <Button href="#">Accesorios</Button>
                        </li>
                    </ul>
                    <a href="#"><CartWidget/></a>
                    
                </nav>
                
            </AppBar>


        </div>

    )
}