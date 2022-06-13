#1423. Maximum Points You Can Obtain from Cards

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

Рассмотрим **Пример 1**. Мы должны взять `k` карт сначала или конца.

Возможно, это первые `k`:

[**1**, **2**, **3**, ~~4~~, ~~5~~, ~~6~~, ~~1~~]

Или первые `k`-1 + последняя n:

[**1**, **2**, ~~3~~, ~~4~~, ~~5~~, ~~6~~, **1**]

Или первые k-2 + последние n-1, n:

[**1**, ~~2~~, ~~3~~, ~~4~~, ~~5~~, **6**, **1**]

Или последние `n-(k-1)`, `n-(k-2)`, `n -(k-3)`:

[~~1~~, ~~2~~, ~~3~~, ~~4~~, **5**, **6**, **1**]

Думаю, что закономерность понятна.

Найдём сумму первых k карт:

```ts
let curSum: number = 0;
for (let i: number = 0; i < k; i++) {
  curSum += cardPoints[i];
}
```

Добавим переменную для хранения максимальной суммы k карт:

```ts
let maxSum: number = curSum;
```

В цикле уменьшаем на одну карту слева и добавляем одну карту справа. Сравниваем с текущим максимумом. По окончании цикла возвращаем максимальное значение

```ts
for (let i = k - 1; i >= 0; i--) {
  const j = cardPoints.length - k + i;
  curSum = curSum - cardPoints[i] + cardPoints[j];
  maxSum = Math.max(maxSum, curSum);
}
```

Весь алгоритм выглядит так:

```ts
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
```

</details>

[leetcode link](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
