function stars2(n) {
  let result = "*";
  for (let i = 2; i <= n; i++) {
    let str = "\n";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    result += str;
  }

  for (let i = n - 1; i > 0; i--) {
    let str = "\n";
    for (let j = 0; j < i; j++);
    {
      str += "*";
    }
    result += str;
  }
  console.log(result);
}
stars2(1);
console.log("--------");
// *
stars2(5);
console.log("--------");
// *
// **
// *
stars2(3);
console.log("--------");
// *
// **
// ***
// **
// *
stars2(4);

// *
// **
// ***
// ****
// ***
// **
// *
