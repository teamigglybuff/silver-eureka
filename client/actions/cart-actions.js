import * as types from '../constants/action-types';

export const addItem = (item) => ({
  type: types.ADD_TO_CART,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: types.DELETE_FROM_CART,
  payload: itemId,
});

export const getCart = (userId) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  };

  // Make sure to ask Will what is being sent back
  return (dispatch) => {
    fetch('/user', config)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_CART,
          payload: data,
        });
      });
  };
};
