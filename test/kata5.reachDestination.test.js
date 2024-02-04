const { reachDestination } = require("../src/kata5.reachDestination");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.')
  });
});