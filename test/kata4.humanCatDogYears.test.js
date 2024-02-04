const { humanCatDogYears } = require("../src/kata4.humanCatDogYears");

describe("humanCatDogYears", () => {
    it("returns array of human, cat and dog years when human years are passed", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
});

// Look Ma, no handlebars!!!