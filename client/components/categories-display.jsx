import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredProducts, getAllProducts } from '../actions/product-actions';

function CategoriesDisplay () {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  const categoryLinks = categories.map((el) => {
    const filterProducts = () => {
      console.log('button');
      dispatch(getFilteredProducts(el));
    };

    return (
      <button onClick={filterProducts}>{el}</button>
    );
  });

  const filterAllProducts = () => {
    dispatch(getAllProducts());
  }

  return (
    <div className="categoryLinks">
      <button onClick={filterAllProducts}>All</button>
      {categoryLinks}
    </div>
  );
}

export default CategoriesDisplay;
