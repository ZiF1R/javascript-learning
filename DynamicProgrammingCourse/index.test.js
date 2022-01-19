const DynamicProgrammingFunctions = require("./index.js");

const { fib, uniquePaths, canSum, howSum, bestSum } = DynamicProgrammingFunctions;

describe("fib", () => {
  test("Numbers 1 to 10", () => {
    expect(fib(2)).toBe(1);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(7)).toBe(13);
    expect(fib(8)).toBe(21);
    expect(fib(10)).toBe(55);
  });
  test("Numbers 11 to 100", () => {
    expect(fib(20)).toBe(6765);
    expect(fib(43)).toBe(433494437);
    expect(fib(51)).toBe(20365011074);
    expect(fib(78)).toBe(8944394323791464);
    expect(fib(89)).toBe(1779979416004714000);
    expect(fib(100)).toBe(354224848179262000000);
  });
});

describe("uniquePaths", () => {
  test("basic tests", () => {
    expect(uniquePaths(3, 7)).toBe(28);
    expect(uniquePaths(5, 9)).toBe(495);
    expect(uniquePaths(6, 12)).toBe(4368);
    expect(uniquePaths(7, 21)).toBe(230230);
    expect(uniquePaths(18, 18)).toBe(2333606220);
  });
});

describe("canSum", () => {
  test("should return true", () => {
    expect(canSum(7, [5, 3, 4, 7])).toBeTruthy();
  });
  test("should return false", () => {
    expect(canSum(300, [7, 14])).toBeFalsy();
  });
});

describe("howSum", () => {
  test("basic tests", () => {
    expect(howSum(7, [5, 3, 4, 7])).toStrictEqual([4, 3]);
    expect(howSum(8, [2, 3, 5, 4])).toStrictEqual([2, 2, 2, 2]);
  });
});

describe("bestSum", () => {
  test("basic tests", () => {
    expect(bestSum(7, [5, 3, 4, 7])).toStrictEqual([7]);
    expect(bestSum(8, [2, 3, 5])).toStrictEqual([3, 5]);
    expect(bestSum(8, [1, 4, 5])).toStrictEqual([4, 4]);
    expect(bestSum(2, [5, 3, 4, 7])).toBeNull();
    expect(bestSum(100, [1, 2, 5, 25])).toStrictEqual([25, 25, 25, 25]);
  });
});