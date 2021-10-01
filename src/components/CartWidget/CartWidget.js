import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = ({num}) => {
    return (
        <span>
            <FontAwesomeIcon icon = {faCartPlus} /> {num}
        </span>
    )
}

export default CartWidget
