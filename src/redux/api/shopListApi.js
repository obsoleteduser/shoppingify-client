import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getToken from '../../helpers/getToken'

export const shopListApi = createApi({
    reducerPath: 'shoplistapi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-commercial.onrender.com/user', 
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
        providesTags: ['List'],
        responseHandler: (response) => response.lists
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
        }),
        invalidatesTags: ['List'],
    }),

    getTopProducts: build.query({
        query: () => 'fullstatistics',
    }),
    getList: build.mutation({
        query: (id) => ({
            url: 'targetlist',
            method: 'POST',
            body: {id}
        }),
        invalidatesTags: ['List'],
    })
})

})


export const { useSetListMutation, useGetListsQuery, useGetWaitingListQuery, useUpdateWaitingListMutation, useGetTopProductsQuery, useGetListMutation } = shopListApi;
