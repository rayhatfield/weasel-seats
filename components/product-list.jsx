import React from 'react';
import PropTypes from 'prop-types';

import Rating from './rating';

export default function ProductList ({ products }) {
    return (
        <ul>
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
        <div>{brand}: {name} <Rating rating={rating} /></div>
    </div>
);
