import { configureStore } from "@reduxjs/toolkit/";
import { redditFeedDataApi } from "./services/redditFeedData";
import { redditWorldNewsDataApi } from "./services/redditWorldNewsData";

export const store = configureStore({
    reducer: {
        [redditFeedDataApi.reducerPath]: redditFeedDataApi.reducer,
        [redditWorldNewsDataApi.reducerPath]: redditWorldNewsDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redditFeedDataApi.middleware).concat(redditWorldNewsDataApi.middleware),
});