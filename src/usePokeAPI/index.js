import axios from 'axios';

function usePokeAPI() {
  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
  });

  const getPokemon = async () => {
    const { data } = await api('pokemon?limit=151');
    return data.results;
  };

  return { getPokemon };
}

export { usePokeAPI };
