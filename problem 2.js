// Write a function that returns an array of objects containing each product’s name and its average rating (rounded to 2 decimal places) based on the reviews.
//  Example output: [{ name: "Laptop Pro X", avgRating: 4.00 }, { name: "Wireless Headphones", avgRating: 3.50 }, ...]



import productData from './prod.json' with { type: 'json' };



let arr = productData.products.map(product => (
    {

    name: product.name,
    avgRating: product.reviews.reduce((sum, next) => sum + next.rating,0) / product.reviews.length.toFixed(2)
    
}));



//console.log((productData.products[0].reviews[0].rating).toFixed(2));

console.log(arr);
