import { useState, useMemo } from 'react';
import Link from 'next/link'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { getProducts, getFilters } from '../lib/carseats';
import Filter from '../components/filters';
import ProductList from '../components/product-list';

import styles from './index.module.css';

export default function Home({ products = [], filters = [] }) {
  const [filterValues, setFilterValues] = useState({})
  const onFilterChange = (field, value) => setFilterValues({...filterValues, [field]: value});
  const filteredProducts = useMemo(() => {
    const filterFns = Object.entries(filterValues).map(
      ([field, value]) => product => {
        return !value?.length || value.includes(product[field])
      }
    );
    return products.filter(p => filterFns.every(fn => fn(p)));
  }, [products, filterValues])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Weasel Seats</h2>
        <div className={styles.container}>
          <ul className={styles.filters}>
            {filters.map(filter => (
              <li key={filter.field}>
                <Filter
                  config={filter}
                  value={filterValues[filter.field]}
                  onChange={(value) => onFilterChange(filter.field, value)}
                />
              </li>
            ))}
          </ul>
          <ProductList products={filteredProducts} />
        </div>
      </section>
    </Layout>
  )
}

export function getStaticProps() {
  const products = getProducts();
  const filters = getFilters();
  return {
    props: {
      products,
      filters
    }
  }
}
