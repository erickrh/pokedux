import React from 'react';
import axios from 'axios';

function usePokeAPI() {
  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
  });

  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    const getPokemon = async () => {
      const { data } = await api('pokemon?limit=151');
      setPokemons(data.results);
    };
    getPokemon();
  }, []);

  return { pokemons };
}

export { usePokeAPI };
