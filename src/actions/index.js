import { usePokeAPI } from '../usePokeAPI';
import { SET_POKEMONS } from './types';

function Actions() {
  const { getPokemonDetails } = usePokeAPI();

  const setPokemons = payload => ({
    type: SET_POKEMONS,
    payload,
  });
  
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
    getPokemonsWithDetails,
  }
}

export { Actions }