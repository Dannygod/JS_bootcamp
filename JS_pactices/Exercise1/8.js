function findSmallerTotal(arr, small) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
