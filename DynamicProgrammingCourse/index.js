/**
 * 
 * @param {number} n - position of number in fibonacci sequence
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {number} n-th number of fibonacci sequience
 */
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

/**
 * 
 * @param {number} m - number of columns
 * @param {number} n - number of rows
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {number} count of ways to go to the bottom-right corner [m-1][n-1] from top-left corner [0][0] by moving only down or right
 */
const uniquePaths = (m, n, memo = {}) => {
  if (memo[[m, n]] || memo[[n, m]])
    return memo[[m, n]] ? memo[[m, n]] : memo[[n, m]];

  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  memo[[m, n]] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

  return memo[[m, n]];
};

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {array} if it possible to get the target from numbers array by summarizing returns true, otherwise returns false
 */
const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let number of numbers) {
    if (canSum(target - number, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {array} if it possible to get the target from numbers array by summarizing returns one of the ways to get it, otherwise returns null
 */
const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let number of numbers) {
    let reminderResult = howSum(target - number, numbers, memo);
    if (reminderResult !== null)
      return memo[target] = [ ...reminderResult, number ];
  }

  memo[target] = null;
  return null;
};

/**
 * 
 * @param {number} target - not nagative number
 * @param {array} numbers - array of numbers from which function try to get target by summarizing
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {array} if it possible to get the target from numbers array by summarizing returns the shortest way to get it, otherwise returns null
 */
const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let bestResult = null;
  for (let number of numbers) {
    let reminderResult = bestSum(target - number, numbers, memo);
    if (reminderResult !== null) {
      let result = [ ...reminderResult, number ];
      if (bestResult === null) bestResult = result;
      else bestResult = bestResult.length > result.length ? result : bestResult;
      memo[target] = bestResult;
    }
  }

  memo[target] = bestResult;
  return bestResult;
};

/**
 * 
 * @param {string} target - some word or group of words without spaces
 * @param {array[string]} wordBank - array of string from which function try to construct the target
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {boolean} true if it possible to construct the target from the strings in wordBank, otherwise returns false
 */
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let result = canConstruct(target.slice(word.length), wordBank, memo);
      if (result) {
        memo[target] = result;
        return true;
      }
    }
  }
  
  memo[target] = false;
  return false;
};

/**
 * 
 * @param {string} target - some word or group of words without spaces
 * @param {array[string]} wordBank - array of strings from which function try to construct the target
 * @param {object} memo - object for memoization of calculations, for optimization the time complexity
 * @returns {number} the number of ways we can construct the target from words in array
 */
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let result = countConstruct(target.slice(word.length), wordBank, memo);
      count += result;
    }
  }

  memo[target] = count;
  return count;
};

module.exports = {
  fib,
  uniquePaths,
  canSum,
  howSum,
  bestSum,
  canConstruct,
  countConstruct
}