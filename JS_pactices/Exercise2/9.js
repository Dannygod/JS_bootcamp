function findMin(a) {
  if (a.length == 0) {
    return undefined;
  }
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let tem = 0;
        tem = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tem;
      }
    }
  }

  return a[0];
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5])); // returns 1
console.log(findMin([])); // returns undefined
console.log(findMin([1, 6, 0, 33, 44, 88, -10])); // returns -10
