import React from 'react';
import PropTypes from 'prop-types';

import Rating from './rating';

import styles from './product-list.module.css';

export default function ProductList ({ products }) {
    return (
        <ul className={styles.productList}>
            { products.map((product, i) => (
              <li key={i + product.brand + product.name}>
                <Product product={product} />
              </li>
            )) }
          </ul>
    );
}

const Product = ({product: {brand, name, rating}}) => (
  <div>
    <span className={styles.brand}>{brand}</span> <span className={styles.productName}>{name}</span> <Rating rating={rating} />
  </div>
);
