import React from 'react'
import FormLogin from '../components/FormLogin'
import Alert from '../components/Alert'
import { useSelector } from 'react-redux'

import './Login.css'

const Login = () => {

  const message = useSelector(state=> state.message)

  return (
    <div className='login-container'>
      <FormLogin/>
      <Alert/>
    </div>
  )
}

export default Login