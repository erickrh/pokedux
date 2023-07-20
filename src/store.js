import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { capitalize, logger } from './middlewares/index.jsx';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger, capitalize),
});

export default store;