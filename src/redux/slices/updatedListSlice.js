import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {

    // name: '',
    // products: [{product: '', quantity: 0, bought: false}],
    // status: ''

     data: null,
     isLoading: 'false',
     error: null


}


export const updatedListSlice = createSlice({
    name: 'updatedList',
    initialState,
    reducers: {
        updateList: (state, action) => {
            state.data = action.payload
            return state
        },

        setbought : (state, action) => {
            state.data?.products?.map(product => product.product._id === action.payload.id ? product.bought = action.payload?.status : product)
        },

        setListStatus: (state, action) => {
            state.data.status  = action.payload
        }
    }
})


export const { updateList, setbought, setListStatus } = updatedListSlice.actions
export default updatedListSlice.reducer
