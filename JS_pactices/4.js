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
isUpperCase("ABCD");
isUpperCase("");
isUpperCase("aBCD");
