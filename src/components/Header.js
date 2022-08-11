import { useEffect, useState, useRef } from 'react'
import Menu from './Menu'
import './Header.css'
import MenuButton from './MenuButton'
import logo from '../assets/Battmovil-logo.svg'


const Header = () => {
  const [visible, setVisible] = useState(false)
  const menuRef = useRef()
  const iconRef = useRef()

  useEffect(() => {
    visible ?
      menuRef.current.classList.remove('hidden')
      :
      menuRef.current.classList.add('hidden')
  }, [visible])

  useEffect(() => {
    const handlerVisible = (e) => {
      if (
        visible &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        setVisible(!visible)
      }
    }

    document.addEventListener("mousedown", handlerVisible)

    return () => {
      document.removeEventListener("mousedown", handlerVisible)
    }

  }, [visible])
  return (
    <header>
      {!logo ? <img src={logo} className='logo'/> : <h1 className='title'>Admin panel</h1>}
      <MenuButton visible={visible} setVisible={setVisible} ref={iconRef} />
      <Menu visible={visible} setVisible={setVisible} ref={menuRef} />
    </header>
  )
}

export default Header