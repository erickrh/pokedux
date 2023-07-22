import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  refreshTrigger: false,
  onSearching: false,
  placeholder: 'Search...',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRefreshTrigger: (state, action) => {
      state.refreshTrigger = action.payload;
    },
    setOnSearching: (state, action) => {
      state.onSearching = action.payload;
    },
    setPlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
  },
});

export const {
  setLoading,
  setRefreshTrigger,
  setOnSearching,
  setPlaceholder,
} = uiSlice.actions;

export default uiSlice.reducer;