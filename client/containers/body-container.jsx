import React from 'react';
import ProductsDisplay from '../components/products-display.jsx';
import CategoriesDisplay from '../components/categories-display.jsx';
import NavBar from '../components/nav-bar.jsx'

const style = {
  display: 'flexbox',
  alignContent: 'center',
  justifyContent: 'center',
  color: 'pink',
};

const styleBody = {
  display: 'flex',
  flexDirection: 'horizontal',
};

function BodyContainer() {
  return (
    <div id="bodyContainer" style={style}>
      <p>Hoidy Body</p>
      <NavBar />
      <div style={styleBody}>
        <CategoriesDisplay />
        <ProductsDisplay />
      </div>
    </div>
  );
}

export default BodyContainer;
