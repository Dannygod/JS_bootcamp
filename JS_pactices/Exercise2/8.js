function swap(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}
console.log(swap("Aloha")); // returns "aLOHA"
console.log(swap("Love you.")); // returns "lOVE YOU."
