import data from '../data/data.json';

const distinct = (items, prop) => [
    ...new Set(
        items.map(({[prop]: v}) => v).flat()
    )
];

const range = (items, prop) => [
    Math.min(...items.map(({ [prop]: {min} }) => min)),
    Math.max(...items.map(({ [prop]: {max} }) => max))
]

export const getProducts = () => data;

export const getFilters = () => [
    {
        field: 'brand',
        type: 'string',
        options: distinct(data, 'brand')
    },
    {
        field: 'features',
        type: 'string',
        options: distinct(data, 'features')
    },
    {
        field: 'types',
        type: 'string',
        options: distinct(data, 'types')
    },
    {
        field: 'ages',
        type: 'range',
        range: range(data, 'ages')
    },
    {
        field: 'height',
        type: 'range',
        range: range(data, 'height')
    },
    {
        field: 'weight',
        type: 'range',
        range: range(data, 'weight')
    },
];
