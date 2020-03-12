import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/cart-actions';

function PreviewCartButton(props) {
  const dispatch = useDispatch();
  // const { item } = props;
  // const cart = useSelector((state) => state.cart.cartItems)

  const addToCart = () => {
    dispatch(addItem(props));
  };

  return (
    <div>
      <button type="button" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default PreviewCartButton;
