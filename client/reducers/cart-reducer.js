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
      console.log('Payload:', payload);
      cartItems.push(payload);
      return ({
        ...state,
        cartItems,
      });

    case types.DELETE_FROM_CART:
      for (let i = 0; i < state.cartItems.length; i += 1) {
        if (state.cartItems[i].id === payload) {
          const cartItems = state.cartItems.slice();
          cartItems.splice(i, 1);
          return ({
            ...state,
            cartItems,
          });
        }
      }
      break;

    case types.GET_CART:
      return ({
        ...state,
        cartItems: payload,
      });

    default:
      return state;
  }
}

export default cartReducer;
