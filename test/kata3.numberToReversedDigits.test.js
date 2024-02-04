const { numberToReversedDigits } = require("../src/kata3.numberToReversedDigits");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3, 2, 1])
  });
});

