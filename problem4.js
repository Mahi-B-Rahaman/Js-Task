// Write a function that groups products into three categories based on stock: "Low" (< 50), "Medium" (50–100), and "High" (> 100).
// Return an object where each key is a stock level and the value is an array of product names. Example output: 
// { Low: ["Cookbook: World Cuisine", "Digital Camera"], Medium: [...], High: ["Cotton T-Shirt"] }

import productData from './prod.json' with { type: 'json' };

let productIds = {
    low: [],
    med: [],
    high: []
};

productData.products.forEach(product => {
    if (product.stock < 50) {
        productIds.low.push(product.name);
    }
    else if (product.stock >= 50 && product.stock < 100) {
        productIds.med.push(product.name);
    }
    else if (product.stock >= 100) {
        productIds.high.push(product.name);
    }
});

console.log(productIds);
