function position(str) {
  let sum = -1;
  if (str.length == 0) {
    console.log(sum);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      sum = i;
      break;
    }
  }

  if (sum === -1) {
    console.log(sum);
  } else {
    console.log(str[sum]);
    console.log(sum);
  }
  return;
}

position("abcd"); // prints -1
position("AbcD"); // prints A 0
position("abCD"); // prints C 2
