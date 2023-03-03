import { configureStore } from "@reduxjs/toolkit";
import  itemAddReducer  from "./slices/newProductSlice";



export const store = configureStore({
    reducer: {
        itemAddReducer
    }
})