import * as types from '../constants/action-types';

const initialState = {
  user: '',
  cartItems: [],
  cartPrice: 0,
};

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const cartItems = state.cartItems.slice();
      cartItems.push(payload);
      return ({
        ...state,
        cartItems,
      });
    case types.DELETE_FROM_CART:
      
    default:
      return state;
  }
}

export default cartReducer;
