import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/cart-item.jsx';

function CartContainer() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartArray = cartItems.map((el) => {
    const { item } = el;
    return (
      <CartItem
        id={item.id}
        nameOfItem={item.item}
        price={item.price}
        imageLink={item.link}
      />
    );
  });

  console.log(cartItems);

  return (
    <div>
      <p>this is a cart container</p>
      {cartArray}
    </div>
  );
}

export default CartContainer;
