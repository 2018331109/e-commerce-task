import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>
        +
      </button>
      <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>
        -
      </button>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
