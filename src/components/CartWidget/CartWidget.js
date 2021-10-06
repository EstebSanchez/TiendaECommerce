import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = ({items}) => {
    return (
        <div>
            <FontAwesomeIcon icon = {faCartPlus} /> {items}
        </div>
    )
}

export default CartWidget
