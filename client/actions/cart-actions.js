import * as types from '../constants/action-types';

export const addItem = (item) => ({
  type: types.ADD_TO_CART,
  payload: item,
});

export const deleteItem = (item_id) => ({
  type: types.DELETE_FROM_CART,
  payload: item_id,
});

export const getCart = (user_id) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id }),
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
