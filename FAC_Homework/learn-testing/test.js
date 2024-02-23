// test.js
import assert from "assert";
import test from "node:test";
import square, { equal } from "./index.js";

test.describe("x in square(x) is positive", () => {
  test("different than zero", () => {
    assert.notEqual(square(2), 0);
    assert.throws(() => square(0), {
      message: "argument should be bigger than zero",
    });
  });
});

test.describe("x in square(x) is negative", () => {
  test("smaller than zero", () => {
    assert.throws(() => square(-2), {
      message: "argument should be a positive number",
    });
  });
});

test.describe("equal", () => {
  test("checks if expected equals actual", () => {
    const actual = 2;
    const expected = square(actual);
    //const result = square(actual);
    assert.equal(equal(actual, expected), true);
  });

  test("checks if not equal", () => {
    const actual = 2;
    const expected = square(actual) + 1;

    assert.notEqual(equal(actual, expected), true);
  });
});
