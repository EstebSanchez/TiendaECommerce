import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css"
const Navbar = ({items}) => {
    function alertOnClick(){
        alert("En Progreso!");
    }

    return (
            <nav>
                <h3> Energy Drinks</h3>
                <ul>
                    <li id = "home"><a href="#" onClick={alertOnClick}>Home</a></li>
                    <li id = "about"><a href="#" onClick={alertOnClick}>About Us</a></li>
                    <li id = "help"><a href="#" onClick={alertOnClick}>Help</a></li>
                    <li id = "products"><a href="#" onClick={alertOnClick}>Products</a></li>
                </ul>
                <CartWidget items = {items}/>
            </nav>
    )
}

export default Navbar
