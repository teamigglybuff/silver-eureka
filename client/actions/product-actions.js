import * as types from '../constants/action-types';

export const getAllProducts = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (dispatch) => {
    fetch('/products', config)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_ALL_PRODUCTS,
          payload: data,
        });
      });
  };
};

export const getFilteredProducts = (productType) => ({
  type: types.GET_FILTERED_PRODUCTS,
  payload: productType,
});

export const incrementProductQuantity = (productId) => ({
  type: types.INCREMENT_PRODUCT_QUANTITY,
  payload: productId,
});

export const decrementProductQuantity = (productId) => ({
  type: types.DECREMENT_PRODUCT_QUANTITY,
  payload: productId,
});
