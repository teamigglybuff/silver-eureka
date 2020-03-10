import * as types from '../constants/action-types';

export const addItem = (item) => ({
  type: types.ADD_TO_CART,
  payload: item,
});

export const deleteItem = (item) => ({
  type: types.DELETE_FROM_CART,
  payload: item,
});

export const saveCart = () => ({
  type: types.SAVE_CART,
  payload: 
});
