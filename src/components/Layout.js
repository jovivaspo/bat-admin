import React from 'react'
import './Layout.css'
import Header from './Header'
import Alert from './Alert'


const Layout = ({children}) => {

  return (
  <div className='layout'>
    <Header/>
    <Alert/>
    {children}
  </div>
  )
}

export default Layout