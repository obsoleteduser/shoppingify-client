import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const listDetailSlice = createSlice({
    name: 'listDetail',
    initialState,
    reducers: {
        setListDetail: (state, action) => {
            return action.payload
        }
    }
})

export default listDetailSlice.reducer
export const { setListDetail } = listDetailSlice.actions