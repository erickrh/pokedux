import { usePokeAPI } from '../usePokeAPI';
import { SET_POKEMONS, SET_LOADING } from './types';

function Actions() {
  const { getPokemonDetails } = usePokeAPI();

  const setPokemons = payload => ({
    type: SET_POKEMONS,
    payload,
  });

  const setLoading = payload => ({
    type: SET_LOADING,
    payload,
  })
  
  const getPokemonsWithDetails =
    (pokemons = []) =>
      async (dispatch) => {
        const pokemonsDetail = await Promise.all(
          pokemons.map(pokemon => (getPokemonDetails(pokemon))
          ));
        dispatch(setPokemons(pokemonsDetail));
      };

  return {
    setPokemons,
    setLoading,
    getPokemonsWithDetails,
  }
}

export { Actions }