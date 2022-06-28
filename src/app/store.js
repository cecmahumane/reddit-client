import { configureStore } from "@reduxjs/toolkit/";
import { redditFeedDataApi } from "./services/redditFeedData";

export const store = configureStore({
    reducer: {
        [redditFeedDataApi.reducerPath]: redditFeedDataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redditFeedDataApi.middleware),
});