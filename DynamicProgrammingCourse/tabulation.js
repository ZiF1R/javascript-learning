const fib = (n) => {
  let fibonacciNumbersArray = Array(n + 1).fill(0);

  fibonacciNumbersArray[1] = 1;
  for (let i = 0; i < n + 1; i++) {
    fibonacciNumbersArray[i + 1] += fibonacciNumbersArray[i];
    fibonacciNumbersArray[i + 2] += fibonacciNumbersArray[i];
  }

  return fibonacciNumbersArray[n];
}

module.exports = {
  fib,
};