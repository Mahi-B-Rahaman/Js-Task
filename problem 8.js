// Write a function that identifies products with "mixed reviews," defined as having at least one rating of 5 and at least one rating of 2 or lower. 
// Return an array of product names.
//  Example output: ["Wireless Headphones", "Smart Watch"]
const data = require('./products.json');
let name = []
const high = 5;
const low = 2;

function productReviews(prod) {
 for (let i = 0; i < prod.length; i++) {
 let isHigh = 0;
  let isLow = 0;
 for (let j = 0; j < prod[i].reviews.length; j++) {

 if (prod[i].reviews[j].rating === high) {
 isHigh += 1
 }


 if (prod[i].reviews[j].rating <= low) { 
 isLow += 1
 }
}
 if (isHigh > 0 && isLow > 0) {
name.push(prod[i].name);
 }
 }

}
productReviews(data.products);
 
 console.log(name);
