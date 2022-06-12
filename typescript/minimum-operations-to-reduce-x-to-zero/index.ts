/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
// @ts-ignore
const minOperations = (nums: number[], x: number): number => {
  let target: number = 0 - x;
  for (const num of nums) {
    target += num;
  }
  if (target === 0) {
    return nums.length;
  }
  const map = new Map();
  map.set(0, -1);
  let sum = 0,
    res = 0;

  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
    const rest = sum - target;
    if (map.has(rest)) {
      res = Math.max(res, i - map.get(rest));
    }
    map.set(sum, i);
  }

  return res === 0 ? -1 : nums.length - res;
};
