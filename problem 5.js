// e.Write a function that returns all unique user IDs from the reviews across all products. Example output: {"U101", "U102", "U103", ..., "U141"}


import productData from './products.json' with { type: 'json' };

let id= []

productData.products.map(product => {

    product.reviews.forEach(review => {
      id.push(review.user_id)
        }
    )
    }
)

let unique = [...new Set(id)];
console.log(unique)
