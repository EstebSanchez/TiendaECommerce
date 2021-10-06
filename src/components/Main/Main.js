import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
const Main = () => {
    const [items, setItems] = useState(0)

    return (
        <main>
            <Navbar items = {items}/>
            <ItemListContainer items = {items} setItems = {setItems} />
            <Footer/>
        </main>
    )
}

export default Main
