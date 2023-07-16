import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { /* featuring */ logger, counterCapitalize} from './middlewares/index.jsx';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger, /* featuring */ counterCapitalize),
);

const store = createStore(
  rootReducer,
  composeEnhancers,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
