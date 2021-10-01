import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
const Main = () => {

    return (
        <main>
            <Navbar 
            num = {2}
            />
            <ItemListContainer 
            greeting = "Catálogo"
            />
            <Footer/>
        </main>
    )
}

export default Main
