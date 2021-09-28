import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    function alertOnClick(){
        alert("En Progreso!");
    }

    return (
            <nav>
                <div id = "links">
                    <ul>
                    <li id = "home"><a href="#" onClick={alertOnClick}>Home</a></li>
                    <li id = "about"><a href="#" onClick={alertOnClick}>About Us</a></li>
                    <li id = "help"><a href="#" onClick={alertOnClick}>Help</a></li>
                    <li id = "products"><a href="#" onClick={alertOnClick}>Products</a></li>
                    <li id = "login"><a href="#" onClick={alertOnClick}>Log In</a></li>
                    <li id = "register"><a href="#" onClick={alertOnClick}>Register</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar
