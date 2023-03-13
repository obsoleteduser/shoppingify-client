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
        }
    }
})


export const { updateList } = updatedListSlice.actions
export default updatedListSlice.reducer
