import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const redditWorldNewsDataApi = createApi({
    reducerPath: 'redditWorldNewsData',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.reddit.com',
    }),
    endpoints: (builder) => ({
        getRedditWorldNewsData: builder.query({
            query: () => '/r/worldnews.json',
        })
    })
});

export const { useGetRedditWorldNewsDataQuery } = redditWorldNewsDataApi;