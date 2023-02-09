function star(n) {
  let str = "*";

  for (let i = 0; i < n; i++) {
    console.log(str);
    str = str + "*";
  }
}
star(1);
console.log("");
star(4);
