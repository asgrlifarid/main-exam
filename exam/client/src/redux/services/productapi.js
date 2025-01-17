import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    endpoints: builder => ({
        getProd: builder.query({ query: () => `products` }),
        getProductById: builder.query({ query: (id) => `products/${id}` }),
        deleteProd: builder.mutation({
            query: (id) => ({

                url: `products/${id}`,
                method: 'DELETE',
            }),
            
        }),
        postNewProd: builder.mutation({
            query: (payload) => ({
                url: `products`,
                method: 'POST',
                body: payload,
            })
        })
    })
})


export const { useGetProdQuery, useGetProductByIdQuery, useDeleteProdMutation ,usePostNewProdMutation } = productsApi