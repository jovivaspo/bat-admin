import React, { useEffect, useRef } from 'react'
import Reaptcha from 'reaptcha'
import { useDispatch } from 'react-redux'
import { setRecaptcha, setValidUser, setStatus } from '../redux/reducers/recaptchaReducer'


const ReCAPTCH = ({ recaptcha }) => {
    const dispatch = useDispatch()

    const recaptchaRef = useRef(null)


    function onVerify(value) {
        console.log(value)
        value ? dispatch(setValidUser(true)) : dispatch(setValidUser(false))
        dispatch(setRecaptcha(value))

    }

    function onLoad(){
        console.log('cargando')
        dispatch(setStatus('loaded'))
    }

    function onRender(){
        console.log('renderizando')
        dispatch(setStatus('rendered'))
    }

    useEffect(()=>{
        if(recaptcha.status === 'loaded' && recaptcha.attemps >= 3){
            console.log('se ejecutata el render')
            recaptchaRef.current?.renderExplicitly()
        }
    },[recaptcha.status, recaptcha.attemps])

    useEffect(() => {
       
        if (recaptcha.attemps >= 3 && recaptcha.status === 'rendered' ) {
            console.log('reseteo')
            recaptchaRef.current?.reset()
            dispatch(setValidUser(false))
            dispatch(setRecaptcha(''))
        }
    }, [recaptcha.attemps])

    


    return (
        <div className='container-recaptcha' style={{ margin: '1rem' }}>
          {<Reaptcha
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_WEB_SITE}
                explicit={true}
                onVerify={onVerify}
                onLoad={onLoad}
                onRender={onRender}
                
            /> }
        </div>
    )
}

export default ReCAPTCH