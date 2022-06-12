/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum === x) {
    return nums.length;
  }
  const sumRest = sum - x;
  let maxLength = -1,
    currSum = 0;
  for (let l = 0, r = 0; r < nums.length; r++) {
    currSum += nums[r];
    while (l <= r && currSum > sumRest) {
      currSum -= nums[l++];
    }
    if (currSum === sumRest) {
      maxLength = Math.max(maxLength, r - l + 1);
    }
  }
  return maxLength === -1 ? maxLength : nums.length - maxLength;
};

module.exports = minOperations;
