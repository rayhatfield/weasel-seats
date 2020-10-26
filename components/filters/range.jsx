import React from 'react';
import PropTypes from 'prop-types';

export default function RangeFilter ({config, value: {min = config.range[0], max = config.range[1]} = {}, onChange: onChangeProp}) {
    const [rangeMin, rangeMax] = config.range;
    const onChange = ({ target: {name, value}}) => onChangeProp({ min, max, [name]: value })
    return (
        <div>
            <div>min: <input name="min" type="number" min={rangeMin} max={rangeMax} value={min} onChange={onChange} /></div>
            <div>max: <input name="max" type="number" min={rangeMin} max={rangeMax} value={max} onChange={onChange} /></div>
        </div>
    );
}
