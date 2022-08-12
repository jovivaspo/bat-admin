import React from 'react'
import {Link} from 'react-router-dom'

const ItemSlider = ({ item, index }) => {
    console.log(item, index)
    return (
        <div className='container-item-slide'>
            <Link to={`/charger/${item._id}`}>
                <h3>{item.name}</h3>
                <p>Estado: {item.state}</p>
            </Link>


        </div>
    )
}

export default ItemSlider