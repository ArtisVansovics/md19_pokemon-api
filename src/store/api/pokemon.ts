// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonData } from '../../models/PokemonModel';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<PokemonData, void>({
      query: () => 'pokemon',
    }),
    getMoveById: builder.query<any, number>({
      query: (id) => `/move/${id}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonQuery, useGetMoveByIdQuery } = pokemonApi;

export default pokemonApi;
