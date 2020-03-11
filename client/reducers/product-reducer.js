/* eslint-disable no-case-declarations */
import * as types from '../constants/action-types';

const initialState = {
  allProducts: [],
  displayedProducts: [],
  categories: [],
};

function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_PRODUCTS:
      return ({
        ...state,
        displayedProducts: payload,
        allProducts: payload,
      });

    case types.GET_FILTERED_PRODUCTS:
      const filteredProducts = state.allProducts.filter((el) => {
        return el.category === payload;
      });
      return ({
        ...state,
        displayedProducts: filteredProducts,
      });

    // DO FETCH IN FRONT END
    case types.INCREMENT_PRODUCT_QUANTITY:
      const allProducts = state.allProducts.map((el) => {
        if (el.id === payload) el.id += 1;
        return el;
      });
      return ({
        ...state,
        allProducts,
      });

    case types.DECREMENT_PRODUCT_QUANTITY:
      const allProducts = state.allProducts.map((el) => {
        if (el.id === payload) el.id -= 1;
        return el;
      });
      return ({
        ...state,
        allProducts,
      });

    default:
      return state;
  }
}

export default productsReducer;
