import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./slices/componentSlice";



export const store = configureStore({
    reducer: {
      componentReducer
    }
})