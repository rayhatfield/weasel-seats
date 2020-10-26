// just generating some sample product data here.
const fs = require('fs');

const brands = [
    "Chicco",
    "Cybex",
    "Evenflo",
    "Goodbaby",
    "Maxi Rosa",
    "Nuno",
];

const types = [
    "Booster",
    "Carrier Base",
    "Convertible",
    "Combination",
    "Infant Carrier",
    "Travel System",
];

const features = [
    "All In One",
    "Carrier with Base",
    "Easy to Install",
];

const adjectives = [
    "Big",
    "Swampy",
    "Green",
    "Tasty",
    "Fancy",
    "Turbo",
    "Chonky",
    "Funky",
    "Melancholy",
    "Radical",
    "Drunken"
];

const nouns = [
    "Banana",
    "Rocketship",
    "Pup",
    "Sled",
    "Sunburn",
    "Moose",
    "Hat",
    "Cart",
    "Cheese"
];

const suffixes = [
    "Supreme",
    "5000",
    "Jr.",
    "Limited",
    "Unlimited",
    "Premium",
    "9000",
    "III"
];

const rand = length => Math.floor(Math.random() * length);
const randomItem = arr => arr[rand(arr.length)];
const randomItems = (arr, threshold = .6) => arr.filter(() => Math.random() > threshold);
const makeProductName = () => `${randomItem(adjectives)} ${randomItem(nouns)} ${randomItem(suffixes)}`;
const randomRange = (max = 48) => {
    const size = Math.floor(Math.random() * max);
    return {
        min: Math.floor(max / 2 - size / 2),
        max: Math.ceil(max / 2 + size / 2)
    }
}

const makeProduct = () => ({
    brand: randomItem(brands),
    name: makeProductName(),
    types: randomItems(types),
    features: randomItems(features),
    ages: randomRange(),
    weight: randomRange(128),
    height: randomRange(96),
    rating: rand(5) + 1
});

const products = Array.from({length: 100}, makeProduct);

fs.writeFileSync('./data/data.json', JSON.stringify(products, null, 2));
