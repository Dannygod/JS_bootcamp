function flatten(a1) {
  let a2 = [];
  help(a1);
  return a2;

  function help(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        help(arr[i]);
      } else {
        a2.push(arr[i]);
      }
    }
  }
}
console.log(flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]));
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
