import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

import './Main.css'

const Main = () => {

    const [cart, setcart] = useState(0)

    const addItemToCart = (items,stock) => {
        stock > 0 && items <= stock && setcart(cart+items)
    }


    return (
        <main>
            <Navbar
            cart = {cart}
            />
            
            <ItemListContainer
            addItemToCart = {addItemToCart}
            />
            
            
            <Footer/>
        </main>
    )
}

export default Main
