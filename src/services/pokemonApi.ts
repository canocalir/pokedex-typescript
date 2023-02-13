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
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPokemonDetail: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getSpeciesDetails: builder.query({
      query: (name) => `pokemon-species/${name}`
    }),
    getEvolutionData: builder.query({
      query: (url) => `${url}`
    })
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useGetSpeciesDetailsQuery,
  useGetEvolutionDataQuery
} = pokemonApi;
