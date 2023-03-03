import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    details: false,
    itemAdder: false,
    shopList: false
}


export const componentSlice = createSlice({
    name: 'componentState',
    initialState,
    reducers:{
        update: (state, action)=>{
           return state = {...state, ...action.payload}
        }
    }
})

const componentReducer = componentSlice.reducer

export const { update } = componentSlice.actions
export default componentReducer