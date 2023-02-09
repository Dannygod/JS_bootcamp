function findNthMin(a, n) {
  if (a.length == 0) {
    return undefined;
  }
  //SORT
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

  return a[n - 1];
}
console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5
