import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getToken from '../../helpers/getToken'

export const shopListApi = createApi({
    reducerPath: 'shoplistapi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-server-by-tahir.onrender.com/user', 
    prepareHeaders: Headers => {

        const token = getToken()
        Headers.set('authorization', `Bearer ${token}`)

        return Headers
    }
}),

tagTypes: ['List'],

endpoints: (build) => ({
    setList: build.mutation({
        query: (list)=>({
            url: 'shoplist',
            method: 'POST',
            body: list
        }),
        invalidatesTags: ['List'],
    }),
    getLists: build.query({
        query: ()=> 'shoplist',
        providesTags: ['List']
    }),

    getWaitingList: build.query({
        query: () => 'shoplistwaiting',
        providesTags: ['List']
    }),

    updateWaitingList: build.mutation({
        query: (list) => ({
            url: 'updatewaitinglist',
            method: 'PUT',
            body: list
        })
    }) 

})

})


export const { useSetListMutation, useGetListsQuery, useGetWaitingListQuery } = shopListApi;
