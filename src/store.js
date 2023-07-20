import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { logger } from './middlewares/index.jsx';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;