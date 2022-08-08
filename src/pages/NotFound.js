import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h3>Not Found 404</h3>
        <p>Pulse en el enlace para volver a la <Link to='/'>Home</Link></p>
    </div>
  )
}

export default NotFound