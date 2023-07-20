import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../usePokeAPI';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  currentPage: 1,
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (page, { dispatch }) => { // dispatch destrusturado de ThunkAPI.
    const pokemonsRes = await getPokemon(page);
    dispatch(setLoading(true));
    const pokemonsDetail = await Promise.all(
      pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetail));
    dispatch(setLoading(false));
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
        return pokemon.id === action.payload.pokemonId;
      });
  
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const {
  setPokemons,
  setCurrentPage,
  setFavorite,
} = dataSlice.actions;

export default dataSlice.reducer;