import { createSlice } from "@reduxjs/toolkit"



const initialState = {

    // name: '',
    // products: [{product: '', quantity: 0, bought: false}],
    // status: ''

}

export const updatedListSlice = createSlice({
    name: 'updatedList',
    initialState,
    reducers: {
        updateList: (state, action) => {
            state = action.payload
            return state
        },

        setbought : (state, action) => {
            state?.products?.map(product => product.product._id === action.payload.id ? product.bought = action.payload?.status : product)
        }
    }
})


export const { updateList, setbought } = updatedListSlice.actions
export default updatedListSlice.reducer
