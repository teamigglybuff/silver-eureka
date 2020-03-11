import React from 'react';

function OneProduct(props) {
  const { nameOfItem, price, imageLink } = props;

  return (
    <div className="oneProduct">
      <img src={imageLink} alt={nameOfItem} />
      <h3>{nameOfItem}</h3>
      <p>${price}</p>
    </div>
  );
}

export default OneProduct;
