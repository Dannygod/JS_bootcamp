function intersection(a1, a2) {
  let a3 = [];
  let find = 0;
  for (let i = 0; i < a1.length; i++) {
    find = a1[i];
    for (let j = 0; j < a2.length; j++) {
      if (find == a2[j]) {
        a3.push(find);
      }
    }
  }
  return a3;
}
console.log(intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0])); // returns [3, 4]
console.log(intersection([0, 1], [5, 11, 4, 3, 100, 44])); // returns [3, 4]
