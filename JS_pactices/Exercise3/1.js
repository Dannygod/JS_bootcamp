function mySort(a) {
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
  return a;
}
console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
