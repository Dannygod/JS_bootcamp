function pyramid(n) {
  let result = "";
  let a = "*";
  let b = " ";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += b;
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      result += a;
    }
    result += "\n";
  }
  console.log(result);
}

pyramid(1);
//*
pyramid(2);
//  *
// ***
pyramid(4);
//    *
//   ***
//  *****
// *******
pyramid(7);
