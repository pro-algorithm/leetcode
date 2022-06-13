#350. Intersection of Two Arrays II

---

Даны 2 целочисленных массива `nums1` и `nums2`, вернуть **массив их пересечения**.
Каждый элемент в результате должен появляться столько раз, сколько он отображается в обоих массивах. Сортировка результирующего массива **любая**.

**Пример 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Пример 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

**Ограничения:**

1 <= `nums1.length`, `nums2.length` <= 1000;

0 <= `nums1[i]`, `nums2[i]` <= 1000;

<details>

<summary> Решение </summary>

Воспользуемся структурой Map для хранения содержимого массива `nums1` в виде: ключ - элемент массива, значение - число повторений этого элемента в массиве `nums1`

```js
// результирующий массив
const result = [];
// структура
const map = new Map();

for (let num of nums1) {
  // если элемент массива встретили впервые, то значение в структуре будет 1, либо увеличиваем значение
  let value = map.has(num) ? map.get(num) + 1 : 1;
  map.set(num, value);
}
```

Проходим по элементам второго массива, если в структуре есть такое значение, то заносим значение в результирующий массив и уменьшаем значение для этого элемента в структуре `map`

```js
for (let num of nums2) {
  let value = map.get(num);
  if (!!value) {
    result.push(num);
    --value;
    map.set(num, value);
  }
}
```

Возвращаем результирующий массив `result`

Полностью решение

```js
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
```

</details>

[leetcode link](https://leetcode.com/problems/intersection-of-two-arrays-ii/)
