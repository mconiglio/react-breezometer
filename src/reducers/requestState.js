const requestState = (state = { isLoading: false, error: '' }, action) => {
  switch (action.type) {
    case 'FETCH_RESULT_FAILURE':
      return {
        isLoading: action.isLoading,
        error: action.error
      };
    case 'FETCH_RESULT_SUCCESS':
      return {
        isLoading: action.isLoading,
        error: action.error
      };
    case 'FETCH_RESULT_REQUEST':
      return {
        isLoading: action.isLoading,
        error: action.error
      };
    default:
      return state
  }
}

export default requestState;
