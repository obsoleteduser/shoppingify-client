import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi  = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-server-by-tahir.onrender.com/user/'}),
    prepareHeaders: (headers) => {
        
        const token = localStorage.getItem('token')
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
          
        }
        return headers}
        ,
    endpoints: (build) => ({
        getProductcs: build.query({
            query: ()=> `products`
        })
    })
})

export const { useGetProductcsQuery } = productApi