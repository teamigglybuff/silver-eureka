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
      const categories = payload.reduce((array, el) => {
        if (!array.includes(el.category)) array.push(el.category);
        return array;
      }, []);
      return ({
        ...state,
        displayedProducts: payload,
        allProducts: payload,
        categories,
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
      const increasedAllProducts = state.allProducts.map((el) => {
        if (el.id === payload) el.id += 1;
        return el;
      });
      return ({
        ...state,
        allProducts: increasedAllProducts,
      });

    case types.DECREMENT_PRODUCT_QUANTITY:
      const decreasedAllProducts = state.allProducts.map((el) => {
        if (el.id === payload) el.id -= 1;
        return el;
      });
      return ({
        ...state,
        allProducts: decreasedAllProducts,
      });

    default:
      return state;
  }
}

export default productsReducer;
