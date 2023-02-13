import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemonApi";
import themeReducer from "../features/themeSlice";


export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    themeChanger: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
