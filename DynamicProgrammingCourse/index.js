const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

const uniquePaths = (m, n, memo = {}) => {
  if (memo[[m, n]] || memo[[n, m]])
    return memo[[m, n]] ? memo[[m, n]] : memo[[n, m]];

  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  memo[[m, n]] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

  return memo[[m, n]];
};

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

const bestSum = (target, numbers, memo = {}) => {
  // if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let bestResult = null;
  for (let number of numbers) {
    let reminderResult = bestSum(target - number, numbers, memo);
    if (reminderResult !== null) {
      if (bestResult === null) bestResult = reminderResult;
      else bestResult = bestResult.length < reminderResult.length ? bestResult : reminderResult;
      bestResult.push(number);
      // memo[target] = bestResult;
    }
  }

  return bestResult;
};

// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum(8, [2, 3, 5])); // [3, 5]
// console.log(bestSum(8, [1, 4, 5])); // [4, 4]
// console.log(bestSum(2, [5, 3, 4, 7])); // null
// console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

module.exports = {
  fib,
  uniquePaths,
  canSum,
  howSum,
  bestSum
}