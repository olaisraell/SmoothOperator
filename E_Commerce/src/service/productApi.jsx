import { createApi } from "@redux.js/toolkit/query/react";
import {build} from "vite";

const productUrl = import.meta.env.VITE_APP_BASE_URL;

console.log(productUrl);

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery : fetchBaseQuery({baseUrl:`${productUrl}`}),
    endpoints: (build)=>({
        getAllProducts: build.query({
            query:()=>'/products'
        }),
    })
})

export const {useGetAllProductsQuery} = productApi;