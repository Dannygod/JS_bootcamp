function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}
reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a am I"
