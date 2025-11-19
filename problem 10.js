// Write a function that categorizes products based on their review comments. For each product, count how many comments contain
// positive words ("great", "excellent", "good", "amazing", "comfortable")
// versus negative words ("poor", "bad", "heavy", "complex"). Return an object like this
// { "P1001": { positiveCount: 3, negativeCount: 1 }, "P1002": { positiveCount: 2, negativeCount: 2 }, ... }



//important things to note: 1 ta commeents 1 bar e check korbe, 2 jodi positive o negative duita thake tahole count korbe na

const data = require('./products.json');
function commentFilter(prod) {
    const resultsMap = {};
    
    const positive = ["great", "excellent", "good", "amazing", "comfortable"]
    const negative = ["poor", "bad", "heavy", "complex"]

    
    for (let i = 0; i < prod.length; i++) {
        const product = prod[i];
        let posCount = 0;
        let negCount = 0;

        //review loop
        for (let j = 0; j < product.reviews.length; j++) {
            const review = product.reviews[j];
            
            // comment lowercase
            const rev = review.comment.toLowerCase();

            
            let isPositive = false;
            for (let k = 0; k < positive.length; k++) {
                if (rev.includes(positive[k])) {
                    posCount += 1;
                    isPositive = true;
                    break;
                }
            }

          
            let isNegative = false;
            for (let l = 0; l < negative.length; l++) {
                if (rev.includes(negative[l])) {
                    negCount += 1;
                    isNegative = true;
                    break;
                }
            }

          
            if (isPositive && isNegative) {
                continue;
            }
        }


        resultsMap[product.product_id] = {
            positiveCount: posCount,
            negativeCount: negCount
        };
    }

    return resultsMap;
}
const result = commentFilter(data.products);
console.log(result);
