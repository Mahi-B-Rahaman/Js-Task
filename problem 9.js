// Write a function that calculates the average price of products that have a specific feature (e.g., "Water Resistant") 
// and compares it to the overall average price of all products. Return an object with both averages and the difference.
// Example output for "Water Resistant": { featureAvg: 165.00, overallAvg: 242.80, difference: -77.80 }

//important things to note: ques er data ta actual er sathe match korena (manually check korsi)

const data = require('./products.json');

  const feature = "Water Resistant";
  const result =[{feature}];

  //feature average calculation
    function calculateFeatureAverages(product, feature) {
      let featureSum = 0;
      let featureCount = 0;
    for (let i = 0; i < product.length; i++) {
      if (product[i].features.includes(feature)) {
        featureSum += product[i].price;
        featureCount += 1;
      }
      
    }
return featureSum/featureCount;
  }


  //overall average calculation
    function calculateAverages(product) {
      let overallSum = 0;
    for (let i = 0; i < product.length; i++) {
      
      overallSum += product[i].price;
      
    }

    return overallSum
  }


//overall calculation
overallSum=calculateAverages(data.products);
overallAvg=(overallSum/data.products.length).toFixed(2);

//feature calculation

let featureAvg = calculateFeatureAverages(data.products, feature).toFixed(2);

//diff
let difference = (featureAvg - overallAvg).toFixed(2);
result.push({featureAvg, overallAvg, difference});
console.log(result);

