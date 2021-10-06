import React, { useState } from 'react'
import './ItemCount.css'
const ItemCount = (stock) => {

    console.log(stock)
    const [clicks, setClicks] = useState(1)

    console.log(clicks)

    const addClick = (stock) => {
        if(clicks >= 0) setClicks(clicks+1)
    }

    const removeClick = (stock) => {
        if (clicks > 0) setClicks(clicks-1)
    }

    return (
        <div className="counter">
            <button onClick = {() => addClick()} className="btn">+</button>
            <div className="count">{clicks}</div>
            <button onClick = {() => removeClick()} className="btn">-</button>
        </div>
    )
}

export default ItemCount
