const { joinNames } = require("../src/kata6.joinNames");

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    const names = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
    expect(joinNames(names)).toBe('Bart, Lisa & Maggie');
  });

  test("works with a different list of names", () => {
    const names = [{ name: 'Harry' }, { name: 'Ron' }, { name: 'Hermione' }];
    expect(joinNames(names)).toBe('Harry, Ron & Hermione');
  });
});
