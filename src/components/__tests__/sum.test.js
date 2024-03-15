import { sum } from "../sum";
test("Sum function should calculate the sum of two number", () => {
  const result = sum(6, 4);

  // assertion is not mandatory
  //   Assertion
  expect(result).toBe(10);
});
