import * as types from '../constants/action-types';

const initialState = {
  username: '',
  userID: '',
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
   case types.LOGIN:
     const {username, userID} = payload;
    return({
      ...state,
      username,
      userID
    });
    break;
    case types.REGISTER:
      const {username, userID} = payload;
    return({
      ...state,
      username,
      userID
    });
    break;
    case types.LOGOUT: 
    return({
      ...state,
      username,
      userID
    });
    break;
  default:
  return state;
  }
}

export default userReducer;
