function isAllUpperCase(str) {
  if (str.length === 0) {
    console.log(false);
    return;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      sum++;
    }
  }

  if (sum === str.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isAllUpperCase("ABCD");
isAllUpperCase("");
isAllUpperCase("ABCDABCDEFGHIJKLm");
