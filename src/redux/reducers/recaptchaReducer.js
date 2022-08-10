import { createSlice } from "@reduxjs/toolkit";

const recaptchaSlider = createSlice({
    name: 'recaptcha',
    initialState: {
        status: null,
        attemps: localStorage.getItem('attemps') ? localStorage.getItem('attemps') : 0,
        validUser: true,
        valueRecaptcha: null
    },
    reducers: {
        setStatus: (state, action) => ({ ...state, status: action.payload }), //loaded or rendered
        setAttemps: (state, action) => ({ ...state, attemps: action.payload }), //nº attemps
        setValidUser: (state, action) => ({ ...state, validUser: action.payload }), //false (robot) true(person)
        setRecaptcha: (state, action) => ({ ...state, valueRecaptcha: action.payload }), //token
        clearRecaptcha: () => ({
            status: null,
            attemps: 0,
            validUser: true,
            valueRecaptcha: null
        })
    }
})

const { reducer, actions } = recaptchaSlider
export const { setRecaptcha, setValidUser, clearRecaptcha, setAttemps, setStatus } = actions
export default reducer