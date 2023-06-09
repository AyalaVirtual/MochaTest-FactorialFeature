var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it("tests if the output of 5! is equal to 120", () => {
      const input = 5;
      const expected = 120;
      const actual = Calculate.factorial(input);

      assert.equal(actual, expected);
    });
    it("tests if the output of 3! is equal to 6", () => {
      const input = 3;
      const expected = 6;
      const actual = Calculate.factorial(input);

      assert.equal(actual, expected);
    });
    it("returns 1 when you pass in 0", () => {
      const input = 0;
      const expected = 1;
      const actual = Calculate.factorial(input);

      assert.equal(actual, expected);
    });
  });
});

