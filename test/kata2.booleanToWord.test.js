const { booleanToWord } = require("../src/kata2.booleanToWord");

describe("booleanToWord", () => {
  
  it("returns yes for true, no for false", () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
  })

});
