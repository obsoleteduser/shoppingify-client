import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    name: '',
    note: '',
    image: '',
    category: '',
}


export const itemAdderSlice = createSlice({
    name: 'itemAdder',
    initialState,
    reducers: {
        addProduct: (state, action)=>{
            state = action.payload
        }
    }
})

export const { addProduct } = itemAdderSlice.actions
export default itemAdderSlice.reducer