import React from 'react'
import {Link} from 'react-router-dom'
import LogOut from './LogOut'

const items = ['perfil', 'users', 'uses']

const Menu = React.forwardRef((props,ref) => {

    const {setVisible} = props

  return (
    <nav  ref={ref} className='menu .hidden'>
         <ul><li><Link to='/' onClick={()=>setVisible(false)}>Dashboard</Link></li></ul>
        {
            items.map((item,index)=>{
                return(
                    <ul key={index}><li><Link to={`/${item}`} onClick={()=>setVisible(false)}>{item[0].toUpperCase() + item.slice(1)}</Link></li></ul>
                )
            })
        }
        <ul><li><LogOut setVisible={setVisible}/></li></ul>
</nav>
  )
})

export default Menu