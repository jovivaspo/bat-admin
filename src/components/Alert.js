import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {clearMessage} from '../redux/reducers/messageReducer'
import './Alert.css'

const type={
    'error':'#d30e25',
    'success':'#24b707',
    'info':'#0077F8'
}

const Alert = () => {
    const message = useSelector(state => state.message)
    const alertRef = useRef()
    const dispatch = useDispatch()

    useEffect(()=>{

        if(message.message!==""){
            alertRef.current.classList.add('visible')
            const alerTime = setTimeout(()=>{
                alertRef.current.classList.remove('visible')
            },2500)

            return ()=> clearTimeout(alerTime)
        }
    },[message])

    useEffect(()=>{
        if(message.message !== ""){
            const timeClearMessage = setTimeout(()=>{
                dispatch(clearMessage())
            },2700)
            return ()=>{
                clearTimeout(timeClearMessage)}
        }
    },[message])



  return (
    <div ref={alertRef} className='alert-container' style={{
        backgroundColor:type[message.type]
    }}><p>{message.message}</p></div>
  )
}

export default Alert