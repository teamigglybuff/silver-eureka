/* eslint-disable no-case-declarations */
import * as types from '../constants/action-types';

const testItem = {
  nameOfItem: 'Half scale hat 1 inch 24 miniature doll house artisan mini pillbox tiny flapper lady small Downton vintage antique millinery cloche bisque',
  price: 24.86,
  category: 'Clothing',
  era: '1930s',
  stock: 2,
  imageLink: 'https://i.etsystatic.com/11889698/r/il/ea2e1f/1495538949/il_794xN.1495538949_6uyj.jpg',
  itemDescription: 'Peach 100% flax linen forms the base of this pillbox or flapper style 1:24 miniature hat. It is adorned with a pure silk ribbon in a blue-teal artisan-hand-dyed colorway, as well as an ivory pure silk ribbon. The main bow has tiny glass beads down the middle, and there is also a second bow. Looks good from every angle; can be worn as desired. Very petite white lace adorns the bottom.'
};

const initialState = {
  allProducts: [testItem],
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
