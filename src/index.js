import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import breezometerApp from './reducers';
import BreezometerApp from './components/BreezometerApp';

let store = createStore(breezometerApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BreezometerApp />
  </Provider>,
  document.getElementById('root')
)
