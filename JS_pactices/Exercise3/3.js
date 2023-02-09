function confirmEnding(s1, s2) {
  let k = s1.length - 1;
  for (let i = s2.length - 1; i >= 0; i--) {
    if (s1[k] != s2[i]) {
      return false;
    } else {
      k--;
    }
  }
  return true;
}
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "smile")); // false
