import React from 'react';
import PropTypes from 'prop-types';

export default function StringFilter ({config, value = [], onChange: onChangeProp}) {
    const { label, options } = config;
    const onChange = ({target: {value: v, checked}}) => {
        const newValue = checked
            ? [...value, v]
            : value.filter(va => va !== v);

            console.log(newValue);
        onChangeProp(newValue);
    }

    return (
        <ul>
            { options.map(option => (
                <li key={option}>
                    <label>
                        <input
                            type="checkbox"
                            value={option}
                            checked={value.includes(option)}
                            onChange={onChange}
                        />
                        <span>{option}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
}
