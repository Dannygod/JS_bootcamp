function makeStars(n) {
  let result = "*";
  for (let i = 2; i <= n; i++) {
    let s = "\n";
    for (let j = 0; j < i; j++) {
      s += "*";
    }
    result += s;
  }
  console.log(result);
}
makeStars(1);
// *
console.log("-----");
makeStars(2);
// *\n**
console.log("-----");
makeStars(5);
// *\n**\n***\n****\n*****
