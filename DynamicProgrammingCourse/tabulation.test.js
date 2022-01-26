let Tabulation = require("./tabulation.js");

let {
  fib,
  gridTraveler,
  canSum,
  howSum,
  bestSum,
  canConstruct,
  countConstruct,
  allConstruct
} = Tabulation;

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

describe("gridTraveler", () => {
  test("basic tests", () => {
    expect(gridTraveler(3, 7)).toBe(28);
    expect(gridTraveler(5, 9)).toBe(495);
    expect(gridTraveler(6, 12)).toBe(4368);
    expect(gridTraveler(7, 21)).toBe(230230);
    expect(gridTraveler(18, 18)).toBe(2333606220);
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
    expect(bestSum(8, [2, 3, 5])).toStrictEqual([5, 3]);
    expect(bestSum(8, [1, 4, 5])).toStrictEqual([4, 4]);
    expect(bestSum(2, [5, 3, 4, 7])).toBeNull();
    expect(bestSum(100, [1, 2, 5, 25])).toStrictEqual([25, 25, 25, 25]);
  });
});

describe("canConstruct", () => {
  test("should return true", () => {
    expect(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBeTruthy();
    expect(canConstruct("", ["cat", "dog", "mouse"])).toBeTruthy();
    expect(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])).toBeTruthy();
  });
  test("should return false", () => {
    expect(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])).toBeFalsy();
    expect(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])).toBeFalsy();
  });
});

describe("countConstruct", () => {
  test("basic tests", () => {
    expect(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])).toBe(2);
    expect(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(1);
    expect(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])).toBe(0);
    expect(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])).toBe(4);
    expect(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])).toBe(0);
  });
});

describe("allConstruct", () => {
  test("should return all combinations", () => {
    expect(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])).toEqual([
      ["purp", "le"],
      ["p", "ur", "p", "le"]
    ]);
    expect(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])).toEqual([
      ["ab", "cd", "ef"],
      ["ab", "c", "def"],
      ["abc", "def"],
      ["abcd", "ef"]
    ]);
  });
  test("should return an empty array", () => {
    expect(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])).toEqual([]);
    expect(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])).toEqual([]);
  });
});