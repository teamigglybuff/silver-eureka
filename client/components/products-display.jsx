import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneProduct from './one-product.jsx';


function ProductsDisplay() {
  const allProducts = useSelector((state) => state.products.allProducts);

  const productsArray = allProducts.map((el) => (
    <OneProduct
      nameOfItem={el.nameOfItem}
      price={el.price}
      imageLink={el.imageLink}
    />
  ));

  console.log('products:', allProducts);
  return (
    <div>
      <p>Hoi it is Products!</p>
      {productsArray}
    </div>
  );
}

export default ProductsDisplay;
