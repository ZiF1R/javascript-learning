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

  grid[1][1] = 1;
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

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @returns {array} if it possible to get the target from numbers array by summarizing returns one of the ways to get it, otherwise returns null
 */
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

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @returns {array} if it possible to get the target from numbers array by summarizing returns the shortest way to get it, otherwise returns null
 */
const bestSum = (target, numbers) => {
  // in the worst case solution will be not bigger
  // than array of [target + 1] elements
  let table = Array(target + 1).fill(null);

  table[0] = [];
  for (let i = 0; i < target + 1; i++) {
    if (table[i] != null) {
      for (let j = 0; j < numbers.length; j++) {
        let k = i + numbers[j];
        let newWay = [ ...table[i], numbers[j] ];
        if (!Array.isArray(table[k])) table[k] = newWay;
        else {
          table[k] = table[k].length > newWay.length ? newWay : table[k];
        }
      }
    }
  }

  return table[target];
}

/**
 * 
 * @param {string} target - word or group of words without spaces
 * @param {array[string]} wordBank - array of strings from which function try to construct the target
 * @returns {boolean} true if it possible to construct the target from the strings in wordBank, otherwise returns false
 */
const canConstruct = (target, wordBank) => {
  let table = Array(target.length + 1).fill(false);

  table[0] = true;
  for (let i = 0; i < target.length + 1; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

/**
 * 
 * @param {string} target - word or group of words without spaces
 * @param {array[string]} wordBank - array of strings from which function try to construct the target
 * @returns {number} the number of ways we can construct the target from words in array
 */
const countConstruct = (target, wordBank) => {

}

/**
 * 
 * @param {string} target - word or group of words without spaces
 * @param {array[string]} wordBank - array of strings from which function try to construct the target
 * @returns {array} all ways how we can construct the target from words in array 
 */
const allConstruct = (target, wordBank) => {

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