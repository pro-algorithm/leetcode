/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  let curSum = 0;
  for (let i = 0; i < k; i++) {
    curSum += cardPoints[i];
  }
  let maxSum = curSum;
  for (let i = k - 1; i >= 0; i--) {
    const j = cardPoints.length - k + i;
    curSum = curSum - cardPoints[i] + cardPoints[j];
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};

module.exports = maxScore;
