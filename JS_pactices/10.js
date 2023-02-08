function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
console.log(sum([])); // return 0
console.log(sum([-10, -20, -30])); // return -60
