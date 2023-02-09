function isPrime(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(17)); // returns false
console.log(isPrime(1000000)); // returns false
