import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi  = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-server-by-tahir.onrender.com/user',
    prepareHeaders: headers => {
     
  
      const token = localStorage.getItem('token')
      
        headers.set('authorization', `Bearer ${token}`)
       
  
      return headers
    },}),
   
    endpoints: (build) => ({
      getProductcs: build.query({
        query: ()=> `products`,
        onError: (error) => {
          console.error('Error fetching products:', error)
        }
      })
    })
  })
    
  
  
  


export const { useGetProductcsQuery } = productApi