import * as types from '../actions/actionTypes';
import { v4 } from 'node-uuid';

const results = (state = [], action) => {
  switch (action.type) {
    case types.ADD_RESULT:
      let { result } = action;
      result.id = v4();

      return [result, ...state.slice(0, 4)];
    default:
      return state;
  }
}

export default results;
