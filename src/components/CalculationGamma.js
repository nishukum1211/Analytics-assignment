import React from 'react'

function CalculationGama({data}) {
    function extractAlcoholClasses(data) {
        const alcoholClasses = new Set(); // Using Set to store unique values
    
        // Iterate over each wine object and add its Alcohol value to the Set
        data.forEach((wine) => {
          alcoholClasses.add(wine.Alcohol);
        });
    
        // Convert Set to an array and return
        return Array.from(alcoholClasses);
      }
    
      // Call the function and store the result in a variable
      const uniqueAlcoholClasses = extractAlcoholClasses(data);
    
      // Log the unique alcohol classes to the console
      console.log(uniqueAlcoholClasses);
      function calculateFlavanoidsMean(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const flavanoidsValues = filteredData.map((wine) =>
          parseFloat(wine.Flavanoids)
        );
        const sum = flavanoidsValues.reduce((acc, curr) => acc + curr, 0);
        const mean = sum / flavanoidsValues.length;
        return mean.toFixed(3);
      }
    
      // Function to calculate the median of Flavanoids for a given alcohol class
      function calculateFlavanoidsMedian(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const flavanoidsValues = filteredData.map((wine) =>
          parseFloat(wine.Flavanoids)
        );
        const sortedFlavanoids = flavanoidsValues.sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedFlavanoids.length / 2);
        const median =
          sortedFlavanoids.length % 2 === 0
            ? (sortedFlavanoids[middleIndex - 1] + sortedFlavanoids[middleIndex]) /
              2
            : sortedFlavanoids[middleIndex];
        return median.toFixed(3);
      }
    
      // Function to calculate the mode of Flavanoids for a given alcohol class
      function calculateFlavanoidsMode(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const flavanoidsValues = filteredData.map((wine) =>
          parseFloat(wine.Flavanoids)
        );
        const modeMap = {};
        let maxCount = 0;
        let mode;
        flavanoidsValues.forEach((value) => {
          modeMap[value] = (modeMap[value] || 0) + 1;
          if (modeMap[value] > maxCount) {
            maxCount = modeMap[value];
            mode = value;
          }
        });
        return mode.toFixed(3);
      }
      function addGammaProperty(data) {
        data.forEach((wine) => {
          const gamma = (wine.Ash * wine.Hue) / wine.Magnesium;
          wine.Gamma = gamma;
        });
      }
    
      // Function to calculate the mean of Gamma for a given alcohol class
      function calculateGammaMean(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const gammaValues = filteredData.map((wine) => wine.Gamma);
        const sum = gammaValues.reduce((acc, curr) => acc + curr, 0);
        const mean = sum / gammaValues.length;
        return mean.toFixed(3); // Round to 3 decimal places
      }
    
      function calculateGammaMedian(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const gammaValues = filteredData.map((wine) => wine.Gamma);
        const sortedGamma = gammaValues.sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedGamma.length / 2);
        const median =
          sortedGamma.length % 2 === 0
            ? (
                (sortedGamma[middleIndex - 1] + sortedGamma[middleIndex]) /
                2
              ).toFixed(3) // Round to 3 decimal places
            : sortedGamma[middleIndex].toFixed(3); // Round to 3 decimal places
        return median;
      }
    
      function calculateGammaMode(data, alcoholClass) {
        const filteredData = data.filter((wine) => wine.Alcohol === alcoholClass);
        const gammaValues = filteredData.map((wine) => wine.Gamma);
        const modeMap = {};
        let maxCount = 0;
        let mode;
        gammaValues.forEach((value) => {
          modeMap[value] = (modeMap[value] || 0) + 1;
          if (modeMap[value] > maxCount) {
            maxCount = modeMap[value];
            mode = value;
          }
        });
        return mode.toFixed(3); // Round to 3 decimal places
      }
    
      addGammaProperty(data);
  return {
    extractAlcoholClasses,
    calculateFlavanoidsMean,
    calculateFlavanoidsMedian,
    calculateFlavanoidsMode,
    calculateGammaMean,
    calculateGammaMedian,
    calculateGammaMode,
    addGammaProperty,

  }
}

export default CalculationGama;
