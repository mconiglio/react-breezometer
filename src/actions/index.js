import axios from 'axios';
import { BreezometerApi } from '../config'

let nextResultId = 0;
export const addResult = result => {
  return {
    type: 'ADD_RESULT',
    result: { id: nextResultId++, ...result }
  };
};

export const fetchResultRequest = () => {
  return {
    type: 'FETCH_RESULT_REQUEST',
    isLoading: true,
    error: ''
  };
};

export const fetchResultFailure = (error) => {
  return {
    type: 'FETCH_RESULT_FAILURE',
    isLoading: false,
    error
  };
};

export const fetchResultSuccess = () => {
  return {
    type: 'FETCH_RESULT_SUCCESS',
    isLoading: false,
    error: ''
  };
};

export function fetchResults(location) {
  return function (dispatch) {
    dispatch(fetchResultRequest());

    return axios.get(`${BreezometerApi.URI}?location=${location}&key=${BreezometerApi.API_KEY}`)
      .then(function (response) {
        if (!response.data.data_valid)
          return dispatch(fetchResultFailure(response.data.error.message));

        const {
          breezometer_color: color,
          breezometer_description: description,
          breezometer_aqi: aqi,
          country_name: name
        } = response.data;

        dispatch(addResult({ color, description, aqi, name }));
        dispatch(fetchResultSuccess(response.data));
      })
      .catch(function (error) { dispatch(fetchResultFailure(error)); });
  }
}
