import React from 'react';
import ProductsDisplay from '../components/products-display.jsx';
import CategoriesDisplay from '../components/categories-display.jsx';

const style = {
  display: 'flexbox',
  alignContent: 'center',
  justifyContent: 'center',
  color: 'pink',
}
function BodyContainer() {
  return (
    <div id="bodyContainer" style={style}>
      <p>Hoidy Body</p>
      <CategoriesDisplay />
      <ProductsDisplay />
    </div>
  );
}

export default BodyContainer;
