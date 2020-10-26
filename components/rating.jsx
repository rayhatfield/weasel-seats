import React from 'react';
import PropTypes from 'prop-types';

import styles from './rating.module.css';

export default function Rating ({rating = 0}) {
    return (
        <span className={styles.container}>
            <span className={styles.stars}>{Array.from({length: rating}, () => '⭐').join('')}</span>
        </span>
    );
}
