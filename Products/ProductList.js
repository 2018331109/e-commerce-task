import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Product from './Product';

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
