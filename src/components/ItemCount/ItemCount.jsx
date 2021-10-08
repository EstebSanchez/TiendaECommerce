import React, { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({stock,amount,addAmount,removeAmount,buttons}) => {

    console.log(buttons)
    
    return (
        <div className="counter">
            <button disabled = {buttons} onClick = {() => removeAmount()} className="btn">-</button>
            <div className="count">{amount}</div>
            <button disabled = {buttons} onClick = {() => addAmount()} className="btn">+</button>
        </div>
    )
}

export default ItemCount
