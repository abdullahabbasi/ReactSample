import {FETCH_POSTS, ADD_POST} from '../constants/index';

export default function (state = {'posts': []}, action) {
  switch (action.type) {
    case FETCH_POSTS :
      console.log('action data', action);
      return {
        posts: action.payload.data
      }
    case ADD_POST :
      console.log('add post ', action.payload);
      return {
        posts: [...state.posts, {name: action.payload}]
      }
    default: return state;
  }
  return state
}
