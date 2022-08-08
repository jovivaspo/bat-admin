import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../components/Logo'
import { login } from '../redux/reducers/userReducer'
import './FormLogin.css'
import Loader from './Loader'
import { setMessage } from '../redux/reducers/messageReducer'
import { setLoading } from '../redux/reducers/loadingReducer'


const initialForm = {
    email: "",
    password: ""
}

const FormLogin = () => {
    const loading = useSelector(state=>state.loading)
    const [form, setForm] = useState(initialForm)
    const errorEmail = useRef()
    const errorPass = useRef()
    const dispatch = useDispatch()

    const handlerForm = (e) => {
        e.preventDefault()

        let error

        if (form.email === "") {
            errorEmail.current.innerHTML = 'Introduzca su email'
            error = true
        }
        if (form.password === "") {
            errorPass.current.innerHTML = 'Introduzca contraseña'
            error = true
        }
        if (error){
            return false
        }else{
            errorEmail.current.innerHTML = ''
            errorPass.current.innerHTML = ''
        }

        dispatch(setLoading(true))

        dispatch(login({
            email: form.email,
            password: form.password
        }))
            .unwrap()
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res))
                dispatch(setMessage(
                    {
                        message: 'Bienvenido',
                        type: 'success'
                    }
                ))
                dispatch(setLoading(false))
                setForm(initialForm)
            })
            .catch(error => {
                
                dispatch(setLoading(false))
                dispatch(setMessage(
                    {
                        message: error,
                        type: 'error'
                    }
                ))
            })

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <form className='form-login'>
            <h2>Inicia sesión</h2>
            <div className='container-logo'><Logo /></div>
            <div className='container-inputs'>
                <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} />
                <p ref={errorEmail} className='error error-email'></p>
                <input type='password' name='password' placeholder='Contraseña' value={form.password} onChange={handleChange} />
                <p ref={errorPass} className='error error-password'></p>
            </div>
            <button className='btn-login' onClick={handlerForm}>
                {!loading ? "Login" : <Loader size={36} />}
            </button>
        </form>
    )
}

export default FormLogin