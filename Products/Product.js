import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
