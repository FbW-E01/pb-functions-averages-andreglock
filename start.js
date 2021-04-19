/**
 * 1. Declare two functions: calculateRoundAverages and calculateTotalAverages
 */
function calculateRoundAverages(scores) {
  const averages = [];
  for (let i = 0; i < scores.length; i++) {
    let roundSum = 0;
    let average;
    for (let j = 0; j < scores[i].length; j++) {
      roundSum = roundSum + scores[i][j];
      average = roundSum / golfScores[i].length;
    }
    averages.push(average);
  }
  return averages;
};

function calculateTotalAverages(scores) {
  const averages = calculateRoundAverages(golfScores);
  let sum = 0;
  for (let i = 0; i < averages.length; i++) {
    sum = sum + averages[i];
    console.log(`The average score for round ${i + 1} is ${averages[i].toFixed(2)}`);
  }
  console.log(`The average of averages is ${(sum / averages.length).toFixed(2)}`);
};

/**
 * 2. Implement calculateRoundAverages
 * 
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 * 
 * An example of the expected output
 * "The average score for round 4 is 1.33"
*/


/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */



///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
const golfScores = [
  [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
  [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
  [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
  [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
  [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
  [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
  [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
  [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
];
calculateRoundAverages(golfScores);
calculateTotalAverages(golfScores);