import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneProduct from './one-product.jsx';
import { getAllProducts }from '../actions/product-actions';


function ProductsDisplay() {
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const displayedProducts = useSelector((state) => state.products.displayedProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(allProducts);

  const productsArray = displayedProducts.map((el) => (
    <OneProduct
      id={el.id}
      nameOfItem={el.item}
      price={el.price}
      imageLink={el.link}
    />
  ));
  return (
      <div>
        {productsArray}
      </div>
  );
}

export default ProductsDisplay;
