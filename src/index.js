import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import breezometerApp from './reducers';
import BreezometerApp from './components/BreezometerApp';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
let store = createStore(breezometerApp, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState({
    results: store.getState().results
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BreezometerApp />
  </Provider>,
  document.getElementById('root')
)
