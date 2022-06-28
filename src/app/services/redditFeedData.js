import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const redditFeedDataApi = createApi({
    reducerPath: 'redditFeedData',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.reddit.com',
    }),
    endpoints: (builder) => ({
        getRedditFeedData: builder.query({
            query: () => '/r/popular.json',
        })
    })
});

export const { useGetRedditFeedDataQuery } = redditFeedDataApi;