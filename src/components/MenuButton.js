import React from 'react'
import MenuIcon from './MenuIcon'

const MenuButton = React.forwardRef((props, ref) => {
    const {setVisible,visible} = props
  return (
    <button ref={ref} className='btn-menu' onClick={() => setVisible(!visible)}><MenuIcon/></button>
  )
})

export default MenuButton