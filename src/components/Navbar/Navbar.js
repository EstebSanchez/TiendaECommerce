import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css"
const Navbar = ({cart}) => {
    
    
    function alertOnClick(){
        alert("En Progreso!");
    }

    return (
            <nav>
                <div className= "brand">
                    <a href="index.html"><img className = "logo" src="https://cdn.icon-icons.com/icons2/2070/PNG/512/soda_can_icon_125660.png" alt="logo" /> <h4>E-Drinks</h4> </a>
                </div>
                <ul>
                    <li id = "home"><a href="#" onClick={alertOnClick}>Home</a></li>
                    <li id = "about"><a href="#" onClick={alertOnClick}>About Us</a></li>
                    <li id = "help"><a href="#" onClick={alertOnClick}>Help</a></li>
                    <li id = "products"><a href="#" onClick={alertOnClick}>Products</a></li>
                </ul>
                <CartWidget cart = {cart}/>
            </nav>
    )
}

export default Navbar
