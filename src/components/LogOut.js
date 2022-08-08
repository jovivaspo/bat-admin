import React from 'react'
import './LogOut.css'
import { useDispatch } from 'react-redux/es/exports'
import { logOut } from '../redux/reducers/userReducer'
import { setMessage } from '../redux/reducers/messageReducer'



const LogOut = ({setVisible}) => {
  const dispatch = useDispatch()

 const  handlerLogOut = () => {
    setVisible(false)
    dispatch(setMessage({
      message:'Cerrando sesión...',
      type:'info'
    }))
  
    const logOutTime = setTimeout(()=>{
      dispatch(logOut())
    },3000)
     
    return ()=> clearTimeout(logOutTime)
     
  } 
  return (
    <button className='logout-btn'
    onClick={handlerLogOut}
    >Cerrar Sesión</button>
  )
}

export default LogOut