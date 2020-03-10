import * as types from '../constants/action-types';

export const addItem = (item) => ({
  type: types.ADD_TO_CART,
  item,
});

export const deleteItem = (item) => ({
  type: types.DELETE_FROM_CART,
  item,
});
