function inversePyramid(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }
    for (let j = 0; j < n * 2 - 1 - i * 2; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}
inversePyramid(4);
// *******
//  *****
//   ***
//    *
