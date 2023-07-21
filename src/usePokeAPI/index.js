import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemon = async (page) => {
  const { data } = await api(`pokemon?limit=20&offset=${(page - 1) * 20}`);
  const pokeInfo = {
    pokemonsData: data.results,
    count: data.count,
  }
  return pokeInfo;
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


export const getPokemonBySearch = async pokemonName => {
  try {
    const { data } = await api(`pokemon/${pokemonName}`);
    const pokemonDetails = {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      types: data.types,
    }
    return pokemonDetails;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.clear();
    }
  }
}