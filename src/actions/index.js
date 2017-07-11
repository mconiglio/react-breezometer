import axios from 'axios';
import { BreezometerApi } from '../config';
import * as types from './actionTypes';

export const addResult = result => {
  return {
    type: types.ADD_RESULT,
    result
  };
};

export const fetchResultRequest = () => {
  return {
    type: types.FETCH_RESULT_REQUEST,
    isLoading: true,
    error: ''
  };
};

export const fetchResultFailure = (error) => {
  return {
    type: types.FETCH_RESULT_FAILURE,
    isLoading: false,
    error
  };
};

export const fetchResultSuccess = () => {
  return {
    type: types.FETCH_RESULT_SUCCESS,
    isLoading: false,
    error: ''
  };
};

export function fetchResults(location) {
  return function (dispatch) {
    dispatch(fetchResultRequest());

    return axios.get(`${BreezometerApi.URI}?location=${location}&key=${BreezometerApi.API_KEY}`)
      .then(response => {
        const { data } = response;
        if (!data.data_valid)
          return dispatch(fetchResultFailure(data.error.message));

        const {
          breezometer_color: color,
          breezometer_description: description,
          breezometer_aqi: aqi,
          country_name: name
        } = data;

        dispatch(addResult({ color, description, aqi, name }));
        dispatch(fetchResultSuccess(data));
      })
      .catch(error => { dispatch(fetchResultFailure(error.response.data.error.message)); });
  }
}
