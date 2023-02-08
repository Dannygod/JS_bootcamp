function isUpperCase(str) {
  if (str.length === 0) {
    console.log(false);
    return;
  }
  if (str[0] === str[0].toUpperCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isUpperCase("ABCD"); // returns true
isUpperCase(""); // returns false
isUpperCase("aBCD"); // returns false
