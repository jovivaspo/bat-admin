import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        type: '',
        message: ''
    },
    reducers: {
        setMessage: (state, action) => {
            return {
                message: action.payload.message,
                type: action.payload.type
            }
        },

        clearMessage: () => {
            return {
                message:"",
                type:""
            }
        }
    }
})

const {reducer, actions} = messageSlice
export const {setMessage,clearMessage}= actions
export default reducer