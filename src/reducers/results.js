const results = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return [action.result, ...state.slice(0, 4)];
    default:
      return state;
  }
}

export default results;
