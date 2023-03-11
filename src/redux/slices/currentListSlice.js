import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listName: '',
    products: [{name: '', id: '', quantity: 0, bought: '', }],
    status: ''
}

export const currentlistSlice = createSlice({
    name: 'currentSlice',
    initialState,
    reducers:{
        setCurrentList: (state, action) => {
            return {...state, ...action.payload }
        },
        setProduct: (state, action) => {
            state.products.push(action.payload)
        },
        setProductQuantity: (state, action) => {
            const { productId } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
              state.products[productIndex].quantity += 1;
            }
          },

        setProductStatus: (state, action) => {
           
            const { productId, status } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
              state.products[productIndex].bought = status;
            }
            
        },

        getTotalQuantity: (state) => {
            const totalQuantity = state.products.reduce((acc, curr) => acc + curr.quantity, 0);
            return totalQuantity;
          },
          
    }
   
})

export const {setCurrentList, setProduct, setProductStatus, setProductQuantity, getTotalQuantity} = currentlistSlice.actions 
export default currentlistSlice.reducer