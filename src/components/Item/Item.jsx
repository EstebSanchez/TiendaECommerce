import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({title,stock,img,addItemToCart}) => {
    
    
    const [amount, setAmount] = useState(1)
    const [nStocks, setnStocks] = useState(stock)
    const [buttons, setButtons] = useState(false)

    const addAmount = () => {
        amount >= 0 && amount < stock && setAmount(amount+1)
    }

    const removeAmount = () => {
        amount > 0 && amount <= stock && setAmount(amount-1)
    }

    const checkAmount = (nStocks,amount) => {
        amount > nStocks && nStocks <= 0 && setAmount(0)
    }

    const checkStock = (nStocks,amount) => {
        nStocks > 0 && amount <= nStocks && setnStocks(nStocks-amount)
    }

    const checkButtons = (nStocks) => {
        nStocks = 0 && setButtons(true)
    }

    const addToCart= () => {
        addItemToCart(amount,nStocks)
        checkStock(nStocks,amount)  
        checkAmount(nStocks,amount)   
    }


    return (
        <div className="card">
            <img src={img} alt="Monster" />
            <h4>{title}</h4>
            <p> Stock: {nStocks}</p>

            <ItemCount 
            stock = {stock}
            amount = {amount}
            addAmount = {addAmount}
            removeAmount = {removeAmount}
            buttons = {buttons}

            />

            <p><button onClick = {() => addToCart()}>Add to Cart</button></p>
        </div>
    )
}

export default Item
