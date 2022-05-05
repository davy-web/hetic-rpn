import { rpn } from "./rpn";

it("1 = 1", function () {
  expect(rpn('1')).toEqual(1);
});

it("1 1 + = 2", function () {
  expect(rpn('1 1 +')).toEqual(2);
});

it("3 4 + 5 - = 2", function () {
  expect(rpn('3 4 + 5 -')).toEqual(2);
});

it("1 4 * 5 - = -1", function () {
  expect(rpn('1 4 * 5 -')).toEqual(-1);
});

it("4 4 / 5 + = 6", function () {
  expect(rpn('4 4 / 5 +')).toEqual(6);
});

it("1 NEGATE = -1", function () {
  expect(rpn('1 NEGATE')).toEqual(-1);
});

it("-1 1 + = Error", function () {
  expect(rpn('-1 1 +')).toEqual("Error");
});

it("4 4 / 5 + NEGATE = -6", function () {
  expect(rpn('4 4 / 5 + NEGATE')).toEqual(-6);
});