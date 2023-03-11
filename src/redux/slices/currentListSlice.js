import { createSlice } from "@reduxjs/toolkit";

/* 

Product Model -> {name: '', id: '', quantity: 0, bought: '', }

*/

const initialState = {
    listName: '',
    products: [],
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
            

            const exists = state.products.some(product => product.id === action.payload.id)
            if(exists){
                const { id } = action.payload;
                const productIndex = state.products.findIndex(product => product.id === id);
                if (productIndex !== -1) {
                  state.products[productIndex].quantity += 1;
                }
            }else{
                state.products.push(action.payload)
            }
            

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
          
        setCurrentList: (state, action) => {
          return action.payload
        }
    }
   
})

export const {setCurrentList, setProduct, setProductStatus, setProductQuantity, getTotalQuantity} = currentlistSlice.actions 
export default currentlistSlice.reducer