import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../usePokeAPI';
import { setLoading, setOnSearching, setPlaceholder, setNoFound } from './uiSlice';

const initialState = {
  pokemons: [],
  count: 0,
  currentPage: 1,
  searchValue: '',
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (page, { dispatch }) => { // dispatch destrusturado de ThunkAPI.
    dispatch(setLoading(true));
    const { pokemonsData, count } = await getPokemon(page);
    dispatch(setCount(count));
    const pokemonsDetail = await Promise.all(
      pokemonsData.map(pokemon => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetail));
    dispatch(setLoading(false));
  }
);

export const goHome = dispatch => {
  dispatch(setCurrentPage(1));
  dispatch(setOnSearching(false));
  dispatch(fetchPokemonsWithDetails(1));
  dispatch(setSearchValue(''));
  dispatch(setPlaceholder('Search...'));
  dispatch(setNoFound(false));
};

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
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
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
  setCount,
  setSearchValue,
  setFavorite,
} = dataSlice.actions;

export default dataSlice.reducer;