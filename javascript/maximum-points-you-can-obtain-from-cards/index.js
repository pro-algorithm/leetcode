/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  let sum = 0;
  for (let point of cardPoints) {
    sum += point;
  }

  if (cardPoints.length === k) {
    return sum;
  }
  let currSum = 0;
  let minRest = sum;
  for (let l = 0, r = 0; r < cardPoints.length; r++) {
    currSum += cardPoints[r];
    if (r - l > cardPoints.length - k - 1) {
      currSum -= cardPoints[l++];
    }
    if (r - l === cardPoints.length - k - 1) {
      minRest = Math.min(minRest, currSum);
    }
  }
  return sum - minRest;
};

module.exports = maxScore;
