import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../services/api";

export const getChargers = createAsyncThunk('/getCharger', async ({ token }, thunkAPI) => {
    try {
        const res = await fetch(`${API.DOMAIN}/${API.CHARGER}`, {
            method: 'GET',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        })

        const data = await res.json()

        if(data.error){
            return thunkAPI.rejectWithValue(data.error)
        }
  
      return data.chargers


    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }

})



const chargerSlice = createSlice({
    name: 'chargers',
    initialState: [],
    extraReducers: {
        [getChargers.fulfilled]:(state,action)=>{
            return action.payload
        }
    }

})

export default chargerSlice.reducer
