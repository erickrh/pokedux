import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { /* counterCapitalize, featuring */ logger, counterCapitalize} from './middlewares/index.js';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger, /* featuring  counterCapitalize */ counterCapitalize),
);

const store = createStore(
  pokemonsReducer,
  composeEnhancers,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
