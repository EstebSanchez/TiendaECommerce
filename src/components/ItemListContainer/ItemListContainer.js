import React, { useState } from 'react'
import Item from '../Item/Item'
const ItemListContainer = ({addItemToCart}) => {

    
    const items = [
        { title : "Monster Energy # 1", stock: 5, img : "https://www.redglove.es/tienda/2159-thickbox_default/monster-energy.jpg" },
        { title : "Speed #1" , stock: 3, img : "https://indrinks.com.ar/wp-content/uploads/2020/05/pack-x-12-latas-speed-unlimited-energizante-500ml.jpg" },
        { title : "Redbull #1" , stock: 9, img : "https://gnc.com.mx/media/catalog/product/cache/d5c3974ef86b1c3c0d3b6947ccba778f/1/1/111902001-rb-red-bull-regular-250ml-a.jpg" }
    ]

    return (
        <div>
            {items.map((item =>
            (<Item
                title = {item.title}
                stock = {item.stock}
                img = {item.img}
                addItemToCart ={addItemToCart}
            />)    
            ))}
            
        </div>
    )
}

export default ItemListContainer
