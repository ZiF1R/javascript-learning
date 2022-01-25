let Tabulation = require("./tabulation.js");

let {
  fib,
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