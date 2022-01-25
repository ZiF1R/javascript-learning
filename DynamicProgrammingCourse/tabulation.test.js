let Tabulation = require("./tabulation.js");

let {
  fib,
  gridTraveler,
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