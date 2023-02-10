function palindrome(str) {
  str = str.toLowerCase();
  //console.log(str);
  let count = 0;
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    //console.log(i);
    if (str[i] == str[str.length - i - 1]) {
      count++;
      continue;
    }
    break;
  }
  //console.log(count);
  if (count == Math.floor(str.length / 2)) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("bearaeb")); // true
console.log(palindrome("Whatever revetahw")); // true
console.log(palindrome("Aloha, how are you today?")); // false
