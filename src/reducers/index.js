import { combineReducers } from 'redux';
import results from './results';
import requestState from './requestState';

const breezometerApp = combineReducers({ results, requestState });

export default breezometerApp;
