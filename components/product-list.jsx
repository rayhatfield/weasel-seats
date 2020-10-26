import React from 'react';
import PropTypes from 'prop-types';

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
        <div>{brand}: {name} {Array.from({length: rating}, () => '⭐').join('')}</div>
    </div>
);
