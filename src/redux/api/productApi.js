import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi  = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/user/'}),
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