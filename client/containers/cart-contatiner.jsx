import React from 'react';
import { useSelector } from 'react-redux';

function CartContainer() {
  const cartItems = useSelector(state => state.cart.cartItems);
  
  return(
    <div>
      <p>this is a cart container</p>
    </div>
  );
};

export default CartContainer;