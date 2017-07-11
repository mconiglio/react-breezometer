import * as types from '../actions/actionTypes';

const results = (state = [], action) => {
  switch (action.type) {
    case types.ADD_RESULT:
      let { result } = action;
      const maxId = state.length === 0 ? 1 : Math.max(...(state.map(r => r.id)));
      result.id = maxId + 1;

      return [result, ...state.slice(0, 4)];
    default:
      return state;
  }
}

export default results;
