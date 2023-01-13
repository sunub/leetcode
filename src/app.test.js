const App = require("./app");

describe("LeetCode Test", () => {
  const input = [
    [1, 7, 3, 6, 5, 6],
    [1, 2, 3],
    [2, 1, -1],
  ];

  const answer = [3, -1, 0];

  input.map((inputValue, i) => {
    expect(App(inputValue)).toBe(answer[i]);
  });
});
