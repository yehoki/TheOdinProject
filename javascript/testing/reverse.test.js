import reverseString from "./reverse";

describe("Reverse string", () => {
  test("Empty string stays the same", () => {
    expect(reverseString("")).toBe("");
  });

  test("One character string returns the same", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("Two letter string returns reversed correctly", () => {
    expect(reverseString("ab")).toBe("ba");
  });

  test("Two letter string with variation of capital and lowercase", () => {
    expect(reverseString("Ab")).toBe("bA");
  });

  test("String with spaces", () => {
    expect(reverseString("kayak KAYAK")).toBe("KAYAK kayak");
  });

  test("Does not affect non-string inputs", () => {
    expect(reverseString(12345)).toBe(12345);
  });
});
