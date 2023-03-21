import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: null,
    note: null,
    category: null,
    image: null,
}


const currentProductSlice = createSlice({
    name: "currentProduct",
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            return action.payload
        }
    }
})

export default currentProductSlice.reducer
export const { setCurrentProduct } = currentProductSlice.actions
