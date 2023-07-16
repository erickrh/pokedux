// VERSION 1.0
// import axios from 'axios';

// function usePokeAPI() {
//   const api = axios.create({
//     baseURL: 'https://pokeapi.co/api/v2/',
//   });

//   const getPokemon = async () => {
//     const { data } = await api('pokemon?limit=151');
//     return data.results;
//   };

//   const getPokemonDetails = async pokemon => {
//     const { data } = await api(pokemon.url);
//     return data;
//   }

//   return { getPokemon, getPokemonDetails };
// }

// export { usePokeAPI };

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemon = async () => {
  const { data } = await api('pokemon?limit=151');
  return data.results;
};

export const getPokemonDetails = async pokemon => {
  const { data } = await api(pokemon.url);
  return data;
};