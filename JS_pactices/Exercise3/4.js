function findDuplicate(arr) {
  if (arr.length == 0) {
    return false;
  }
  let check = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    check = arr[arr.length - 1];
    for (let j = 0; j < arr.length - 1; j++) {
      if (check == arr[j]) {
        return true;
      }
    }
    arr.pop();
  }
  return false;
}
console.log(findDuplicate([1, 3, 5, 7, 9, 3])); // returns true
console.log(findDuplicate([])); // returns false
console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0])); // returns false
