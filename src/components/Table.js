import React from 'react'
import Subtitle from './Subtitle'
import './Table.css'


const Table = ({title, items, headers}) => {
   
  return (
    <div className='container-table'>
   <Subtitle subtitle={title}/>
    {items?.length === 0?
     <h5>No se han encotrado datos</h5>
    :
    <div>Tabla</div>
    }
  </div>
  )
}

export default Table