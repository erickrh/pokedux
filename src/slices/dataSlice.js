import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
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

export const { setPokemon, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;