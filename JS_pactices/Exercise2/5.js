function table9to9() {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      result += i + " x " + j + " = " + i * j + "\n";
    }
    result += "\n";
  }
  console.log(result);
}
table9to9();
