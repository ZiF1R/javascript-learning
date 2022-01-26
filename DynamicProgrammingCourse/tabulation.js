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

/**
 * 
 * @param {number} rows - number of rows
 * @param {number} columns - number of columns
 * @returns {number} count of ways to go to the bottom-right corner [m-1][n-1] from top-left corner [0][0] by moving only down or right
 */
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

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @returns {array} if it possible to get the target from numbers array by summarizing returns true, otherwise returns false
 */
const canSum = (target, numbers) => {
  let table = Array(target + 1).fill(false);

  table[0] = true;
  for (let i = 0; i < target + 1; i++) {
    if (table[i]) {
      for (let j = 0; j < numbers.length; j++) {
        if (i + numbers[j] < target + 1) table[i + numbers[j]] = true;
      }
    }
  }

  return table[target];
};

const howSum = (target, numbers) => {
  // in the worst case solution will be not bigger
  // than array of [target + 1] elements
  let table = Array(target + 1).fill(null);

  table[0] = [];
  for (let i = 0; i < target + 1; i++) {
    if (table[i] != null) {
      for (let j = 0; j < numbers.length; j++) {
        let k = i + numbers[j];
        table[k] = [ ...table[i], numbers[j] ];
      }
    }
  }

  return table[target];
}

const bestSum = (target, numbers) => {

}

const canConstruct = (target, numbers) => {

}

const countConstruct = (target, numbers) => {

}

const allConstruct = (target, numbers) => {

}

module.exports = {
  fib,
  gridTraveler,
  canSum,
  howSum,
  bestSum,
  canConstruct,
  countConstruct,
  allConstruct
};