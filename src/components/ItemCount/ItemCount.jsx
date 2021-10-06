import React, { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({stock}) => {

    const [clicks, setClicks] = useState(1)

    const addClick = () => {
        clicks >= 0 && clicks < stock && setClicks(clicks+1)
    }

    const removeClick = () => {
        clicks > 0 && clicks <= stock && setClicks(clicks-1)
    }

    return (
        <div className="counter">
            <button onClick = {() => removeClick()} className="btn">-</button>
            <div className="count">{clicks}</div>
            <button onClick = {() => addClick()} className="btn">+</button>
        </div>
    )
}

export default ItemCount
