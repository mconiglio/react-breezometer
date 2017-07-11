import * as types from '../actions/actionTypes';

const requestState = (state = { isLoading: false, error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_RESULT_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    case types.FETCH_RESULT_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    case types.FETCH_RESULT_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      };
    default:
      return state
  }
}

export default requestState;
