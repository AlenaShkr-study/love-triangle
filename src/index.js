/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const preferencesLength = preferences.length;
  for (let i = 1; i <= preferencesLength - 2; i++ ){
    if ((preferences[i-1] > preferencesLength) || (preferences[i - 1] === i) ){
      continue;
    }
    let secondValue = preferences[i - 1];
    let thirdValue = preferences[secondValue - 1];
    let firstValue = preferences[thirdValue - 1];
    if ((firstValue === i) && (secondValue > i) && (thirdValue > i)){
      count++;
    }
  }
  return count;
};