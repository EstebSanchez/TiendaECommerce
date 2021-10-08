import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = ({cart}) => {

    return (
        <div>
            <a href=""><FontAwesomeIcon 
            icon = {faCartPlus} 
            /> 
            <span>{cart}</span>
            </a>
        </div>
    )
}

export default CartWidget
