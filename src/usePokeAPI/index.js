import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemon = async (page) => {
  const { data } = await api(`pokemon?limit=20&offset=${(page - 1) * 20}`);
  return data.results;
};

export const getPokemonDetails = async pokemon => {
  const { data } = await api(pokemon.url);
  const pokemonDetails = {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
    types: data.types,
  }
  return pokemonDetails;
};