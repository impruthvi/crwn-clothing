import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={()=>{removeItemToCart(cartItem)}}>decrement</span>
            <br />
            <span onClick={()=>{addItemToCart(cartItem)}}>increment</span>
          </div>
        );
      })
  );
};

export default Checkout;
