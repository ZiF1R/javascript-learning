/**
 * 
 * @param {number} n - position of number in fibonacci sequence
 * @returns {number} n-th number of fibonacci sequience
 */
const fib = (n) => {
  let fibonacciNumbersArray = Array(n + 1).fill(0);

  fibonacciNumbersArray[1] = 1;
  for (let i = 0; i < n + 1; i++) {
    fibonacciNumbersArray[i + 1] += fibonacciNumbersArray[i];
    fibonacciNumbersArray[i + 2] += fibonacciNumbersArray[i];
  }

  return fibonacciNumbersArray[n];
};

const gridTraveler = (rows, columns) => {
  let grid = Array(rows + 1).fill(0).map(row => Array(columns + 1).fill(0));

  if (rows > 0 && columns > 0) grid[1][1] = 1;
  for (let i = 0; i < rows + 1; i++)
    for (let j = 0; j < columns + 1; j++) {
      if (i < rows) grid[i+1][j] += grid[i][j];
      if (j < columns) grid[i][j+1] += grid[i][j];
    }
  
  return grid[rows][columns];
};

module.exports = {
  fib,
  gridTraveler,
};