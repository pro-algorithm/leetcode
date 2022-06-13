#1658. Maximum Points You Can Obtain from Cards

---

Есть несколько карт, **расположенных в ряд**, и каждая карта имеет соответствующее количество очков. Очки задаются в целочисленном массиве `cardPoints`.

За один шаг можно взять одну карту с начала или с конца ряда. Вы должны взять ровно `k` карт

Ваш счет - это сумма очков карт, которые вы взяли.

Учитывая массив целых чисел `cardPoints` и целое число `k`, верните максимальное количество очков, которое вы можете получить

**Пример 1:**

```
Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
```

**Пример 2:**

```
Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.
```

**Example 3:**

```
Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.
```

**Ограничения:**

1 <= `cardPoints.length` <= 10<sup>5</sup>;

1 <= `cardPoints[i]` <= 10<sup>4</sup>;

1 <= `k` <= `cardPoints.length`;

<details>

<summary> Решение </summary>

Весь алгоритм выглядит так:

```js
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
```

</details>

[leetcode link](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
