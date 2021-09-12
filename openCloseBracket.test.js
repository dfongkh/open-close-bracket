const openCloseBrackets = require("./openCloseBracket");

const cases = [
  ["()", true],
  ["()[]{}", true],
  ["(]", false],
  ["([)]", false],
  ["{[]}", true],
  ["{[]}{}[]", true],
  ["{{{{{{{}}}}}}}", true],
  ["{{{[])))", false],
];

describe("Open close brackets", () => {
  test.each(cases)("open close brackets", (inputString, expectedResult) => {
    const result = openCloseBrackets(inputString);
    expect(result).toBe(expectedResult);
  });
});
