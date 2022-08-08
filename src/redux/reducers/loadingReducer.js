import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name:'loading',
    initialState:false,
    reducers:{
        setLoading: (state,action)=>{
            return action.payload
        }
    }
})

const {reducer, actions} = loadingSlice
export const {setLoading}= actions
export default reducer