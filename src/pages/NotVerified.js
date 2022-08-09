import React from 'react'
import './NotVerified.css'
import { useDispatch } from 'react-redux'
import { API } from '../services/api'
import {setMessage} from '../redux/reducers/messageReducer'
import Alert from '../components/Alert'


const Verified = ({email}) => {
 
  const dispatch = useDispatch()

  const handlerResendEmail = async () => {
    try {

      const res = await  fetch(`${API.DOMAIN}/${API.USER}/resend`, {
        method: 'POST',
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify({
          email
        })
      })

      const data = await res.json()

      if(data.error){
       return  dispatch(setMessage({
          message:data.error,
          type:'error'
        }))
      }

      return dispatch(setMessage({
        message:data.message,
        type:'success'
      }))

    } catch (error) {
      console.log(error)
      return  dispatch(setMessage({
        message:'Lo sentimos, inténtelo más tarde',
        type:'error'
      }))
    }

  }

  return (
    <>
     <div className='container-notveriried'>
      <p>Debe verificar su correo para continuar.</p>
      <p>Pulse el botón para volver a enviar el mensaje de verificación. <button onClick={handlerResendEmail} className='btn-resend'>Reenviar</button></p>
    </div>
    <Alert/>
    </>
   
  )
}

export default Verified