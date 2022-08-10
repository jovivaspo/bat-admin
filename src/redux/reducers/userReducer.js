import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { API } from '../../services/api'
import { setValidUser,  setAttemps, clearRecaptcha } from './recaptchaReducer'


export const login = createAsyncThunk('/login', async ({email,password}, thunkAPI)=>{
    try{
        const state = thunkAPI.getState()
        const recaptcha = state.recaptcha
        console.log(recaptcha.validUser)
        if(!recaptcha.validUser){
            return thunkAPI.rejectWithValue("Acepte el reCAPTCHA para continuar")
        }

        const res = await fetch(`${API.DOMAIN}/${API.USER}/login`,{
            method:'POST',
            headers:{
                "accept": "application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json()
      
        if(data.attemps){
            localStorage.setItem('attemps', data.attemps)
            thunkAPI.dispatch(setAttemps(data.attemps))

            if(data.attemps >= 3){
                thunkAPI.dispatch(setValidUser(false))
                return thunkAPI.rejectWithValue(data.error)
            }
           
        }

        if(data.error){
            return thunkAPI.rejectWithValue(data.error)
        }

        if(!data.user.role.includes('admin')){
            return  thunkAPI.rejectWithValue("Permiso denegado")
        }

        thunkAPI.dispatch(clearRecaptcha())
        localStorage.removeItem('attemps')
       
        return {
            user:data.user,
            token:data.token
        }


    }catch(error){
        console.log(error)
        return error
    }
})

export const logOut = createAsyncThunk("/logout", async () => {
    localStorage.removeItem("user")
})

export const getUser = createAsyncThunk('/user', async({id,token}, thunkAPI)=>{
    console.log(token, id)
    try{
        const res = await fetch(`${API.DOMAIN}/${API.USER}/${id}`,{
            method:'GET',
            headers:{
                "accept": "application/json",
                "Content-Type":"application/json",
                "Authorization": `bearer ${token}`
            },

        })
        const data = await res.json()


        if(data.error){

            return thunkAPI.rejectWithValue(data.error)
        }

        console.log(data)

        return {
            user: data.user,
            token
        }

    }catch(error){
        console.log(error)
        return error
    }
})



const userSlice = createSlice({
    name:'user',
    initialState:{
        user: localStorage.getItem('user')?  JSON.parse(localStorage.getItem('user')) : null
    },

    extraReducers:{
        [login.fulfilled]: (state,action)=>{
            state.user = action.payload
        },

        [login.pending]: (state) =>{
            state.user = null
        },

        [logOut.fulfilled]: (state) => {
            state.user = null
        },
        [getUser.fulfilled] :(state, action)=>{
            state.user = action.payload
        }
    }
})


export default userSlice.reducer

