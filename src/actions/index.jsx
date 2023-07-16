import { getPokemonDetails } from '../usePokeAPI';
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from './types';

function Actions() {
  const setPokemons = payload => ({
    type: SET_POKEMONS,
    payload,
  });

  const setLoading = payload => ({
    type: SET_LOADING,
    payload,
  })

  const setFavorite = payload => ({
    type: SET_FAVORITE,
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
    setFavorite,
  }
}

export { Actions };