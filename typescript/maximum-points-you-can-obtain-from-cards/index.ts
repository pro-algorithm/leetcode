/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints: number[], k: number): number {
  let curSum: number = 0;
  for (let i: number = 0; i < k; i++) {
    curSum += cardPoints[i];
  }
  let maxSum: number = curSum;
  for (let i = k - 1; i >= 0; i--) {
    const j = cardPoints.length - k + i;
    curSum = curSum - cardPoints[i] + cardPoints[j];
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};

module.exports = maxScore;
