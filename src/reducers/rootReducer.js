import { combineReducers } from 'redux-immutable';
import { pokemonsReducer } from './pokemonsReducer';
import { uiReducer } from './uiReducer';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export { rootReducer };