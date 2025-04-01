import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // example: exampleReducer, we will define this reducer next
  },
});

// Export these types for use in my hooks/components

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
