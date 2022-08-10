import { configureStore } from '@reduxjs/toolkit'
import messageReducer from "../reducers/messageReducer"
import userReducer from '../reducers/userReducer'
import loadingReducer from '../reducers/loadingReducer'
import recaptchaReducer from '../reducers/recaptchaReducer'


 const store = configureStore({
    reducer:{
        message: messageReducer,
        user: userReducer,
        loading: loadingReducer,
        recaptcha: recaptchaReducer
    },
   
 })

 export {store}