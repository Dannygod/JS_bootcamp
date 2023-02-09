function findAllSmall(arr, small) {
  let arr_small = [];
  for (let i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
      arr_small.push(arr[i]);
    }
  }
  return arr_small;
}
console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]
