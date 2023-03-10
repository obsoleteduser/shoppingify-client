import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi  = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-server-by-tahir.onrender.com/user',
    prepareHeaders: headers => {
     
  
      const token = localStorage.getItem('token')
      
        headers.set('authorization', `Bearer ${token}`)
       
  
      return headers
    },}),
    tagTypes: ['Product'],
   
    endpoints: (build) => ({
      getProductcs: build.query({
        query: ()=> `products`,
        providesTags: ['Product']
      }),
      setProduct: build.mutation({
        query: (product) => ({
          url: 'products',
          method: 'POST',
          body: product
        }),
        invalidatesTags: ['Product'],
      }),
      deleteProduct: build.mutation({
        query: (id) => ({
          url: `products/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
      })
    })
  })
    
  
  
  


export const { useGetProductcsQuery, useSetProductMutation } = productApi