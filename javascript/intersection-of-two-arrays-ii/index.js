/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = [];

  const map = new Map();
  for (let num of nums1) {
    let value = map.has(num) ? map.get(num) + 1 : 1;
    map.set(num, value);
  }

  for (let num of nums2) {
    let value = map.get(num);
    if (!!value) {
      result.push(num);
      --value;
      map.set(num, value);
    }
  }

  return result;
};

module.exports = intersect;
