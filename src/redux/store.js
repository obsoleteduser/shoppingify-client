import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import authReducer from "./slices/authSlice";
import componentReducer from "./slices/componentSlice";
import currentListReducer from "./slices/currentListSlice";


export const store = configureStore({
    reducer: {
      componentReducer,
      authReducer,
      currentListReducer,
      [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})
