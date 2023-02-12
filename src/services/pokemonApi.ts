import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (offsetNumber) => `pokemon?offset=${offsetNumber * 20}&limit=30`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    getPokemonDetail: builder.query({
        query: (name) => `pokemon/${name}`
    })
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi
