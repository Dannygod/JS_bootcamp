function factorPrime(n) {
  let result = "";
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (n == i) {
        result += i;
      } else {
        result += i + " x ";
        n = n / i;
        i--;
      }
    }
  }
  return result;
}

console.log(factorPrime(120)); // returns "2 x 2 x 2 x 3 x 5"
