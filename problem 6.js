// Write a function that finds the top 3 products with the highest average ratings, but only includes products with 
// at least 4 reviews. Return an array of objects with product_id, name, and avgRating (sorted by avgRating descending). 
// Example output: [{ product_id: "P1003", name: "Running Shoes", avgRating: 4.20 }, ...]
const data = require('./products.json');
let productInfo = [];
function topProducts(products) {
    const filteredProducts = products.filter(product => {
        return  (product.reviews) && product.reviews.length >= 4;
    });
    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const len = product.reviews.length;
      
        let sum = 0;
        for (let j = 0; j < product.reviews.length; j++) {
            const rating = product.reviews[j].rating  
            sum += rating;
        }

        const avg = sum / len;
        productInfo.push({
            name: product.name,
            product_id: product.product_id,
            avgRating: avg
        });
    }
    productInfo.sort((a, b) => b.avgRating - a.avgRating);
    console.log(productInfo[0], productInfo[1], productInfo[2]);
}

topProducts(data.products);



