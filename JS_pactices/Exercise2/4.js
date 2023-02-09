function table(n) {
  let result = "";

  for (let i = 1; i <= 9; i++) {
    result += n + " x " + i + " = " + n * i + "\n";
  }
  console.log(result);
}
table(9);
