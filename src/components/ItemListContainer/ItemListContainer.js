import React from 'react'
import Item from '../Item/Item'
const ItemListContainer = (items,setItems) => {
    return (
        <div>
            <Item 
            title = "Monster Energy #1" 
            stock = {3}
            img = "https://www.redglove.es/tienda/2159-thickbox_default/monster-energy.jpg"
            items = {items}
            setItems = {setItems}
            >
            </Item>

            <Item 
            title = "Speed #1" 
            stock = {2}
            img = "https://i2.wp.com/indrinks.com.ar/wp-content/uploads/2020/05/pack-x-12-latas-speed-unlimited-energizante-500ml.jpg?fit=1200%2C1178&ssl=1"
            items = {items}
            setItems = {setItems}
            >
            </Item>

            <Item 
            title = "Redbull #1" 
            stock = {6}
            img = "https://gnc.com.mx/media/catalog/product/cache/d5c3974ef86b1c3c0d3b6947ccba778f/1/1/111902001-rb-red-bull-regular-250ml-a.jpg"
            items = {items}
            setItems = {setItems}
            >
            </Item>
            
        </div>
    )
}

export default ItemListContainer
