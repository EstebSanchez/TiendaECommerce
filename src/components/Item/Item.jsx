import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({stock,title,img}) => {
    console.log(stock)

    return (
        <div className="card">
            <img src={img} alt="Monster" />
            {title}
            <p> Stock: {stock}</p>
            <ItemCount stock = {stock}/>
            <p><button>Add to Cart</button></p>
        </div>
    )
}

export default Item
