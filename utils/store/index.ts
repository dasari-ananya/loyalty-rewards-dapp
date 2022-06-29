import { configureStore } from "@reduxjs/toolkit";
import activeWindowReducer from "./features/activeWindowSlice";
import airdropStatusReducer from "./features/airdropStatusSlice";
import walletReducer from "./features/walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    activeWindow: activeWindowReducer,
    airdropStatus: airdropStatusReducer,
    //   posts: postsReducer,
    //   comments: commentsReducer,
    //   users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
