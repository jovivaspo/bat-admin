import React from 'react'
import FormLogin from '../components/FormLogin'
import Alert from '../components/Alert'

import './Login.css'

const Login = () => {

  return (
    <div className='login-container'>
      <FormLogin/>
      <Alert/>
    </div>
  )
}

export default Login