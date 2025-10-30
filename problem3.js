// Write a function that takes a feature keyword (e.g., "Bluetooth") and returns an array of product IDs for products whose features array 
// contains that keyword (case-insensitive). Example for "Bluetooth": ["P1002", "P1010"]
import productData from './prod.json' with { type: 'json' };


let keyword2 = "Bluetooth";


let productIds = [];    

let arr = productData.products.map(product => {

    product.features.forEach(feature => {
        if (feature.includes(keyword2)){  
            productIds.push(product.product_id);
        }
        }
    )
    }
)



console.log(productIds);
