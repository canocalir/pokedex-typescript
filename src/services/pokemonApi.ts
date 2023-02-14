import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (offsetNumber:number) => `pokemon?offset=${offsetNumber * 20}&limit=30`,
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
      query: (name:string) => `pokemon/${name}`,
    }),
    getSpeciesDetails: builder.query({
      query: (name:string) => `pokemon-species/${name}`
    }),
    getEvolutionData: builder.query({
      query: (url:string) => `${url}`
    })
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useGetSpeciesDetailsQuery,
  useGetEvolutionDataQuery
} = pokemonApi;
