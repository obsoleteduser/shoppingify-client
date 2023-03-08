import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: localStorage.getItem('token')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action)=>{
            state.auth = action.payload
        }
    }
})

export default authSlice.reducer
export const { setAuth } = authSlice.actions