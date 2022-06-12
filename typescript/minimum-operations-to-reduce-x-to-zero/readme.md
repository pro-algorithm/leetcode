#1658. Minimum Operations to Reduce X to Zero

---

Дан целочисленный массив `nums` и число `x`. За одну операцию можно удалить крайний левый или крайний правый элемент из массива `nums` и вычесть его значение из `x`.

**Внимание**: Массив будет **изменён** для дальнейших операций.

Вернуть **минимальное число операций**, чтобы уменьшить `x` **точно** до `0`, если это возможно, иначе вернуть `-1`

**Пример 1:**

```
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: Оптимальное решение — удалить два последних элемента, чтобы уменьшить x до нуля.
```

**Example 2:**

```
Input: nums = [5,6,7,8,9], x = 4
Output: -1
```

**Example 3:**

```
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: Оптимальное решение — удалить последние три элемента и первые два элемента (всего 5 операций), чтобы уменьшить x до нуля.
```

**Ограничения:**

1 <= `nums.length` <= 10<sup>5</sup>;

1 <= `nums[i]` <= 10<sup>4</sup>;

1 <= `x` <= 10<sup>9</sup>;

<details>

<summary> Решение </summary>

```ts
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
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
```

</details>

[leetcode link](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
