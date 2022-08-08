import { configureStore } from '@reduxjs/toolkit'
import messageReducer from "../reducers/messageReducer"
import userReducer from '../reducers/userReducer'
import loadingReducer from '../reducers/loadingReducer'


 const store = configureStore({
    reducer:{
        message: messageReducer,
        user: userReducer,
        loading: loadingReducer
    },
   
 })

 export {store}