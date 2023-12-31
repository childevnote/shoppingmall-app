import React from 'react';
import { Product } from './types';
import "../styles/Products.css";
import { Link } from 'react-router-dom';

interface ProductListProps {
  products: Product[];
  loading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading }) => {
  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }


  return (
    <div className='list'>
      <p className='loading or showing'>{loading ? 'Loading...' : `Showing ${products.length} items`}</p>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="products">
              <img src={product.image} alt={product.title} />
              <h3>{truncate(product.title, 20)}</h3>
              <div className="product-price">
                <button id={product.title} className="addCartBtn">Add to Cart</button>
                <p>$ {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
