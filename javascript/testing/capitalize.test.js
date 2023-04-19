import capitalize from "./capitalize";

describe("Capitalize", () => {
  test("Does not capitalize an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("Does not affect characters that do not have a capital letter", () => {
    expect(capitalize("!")).toBe("!");
  });

  test("Returns a capital letter with the same letter", () => {
    expect(capitalize("A")).toBe("A");
  });

  test("Returns a lower case letter as its capital counterpart", () => {
    expect(capitalize("a")).toBe("A");
  });

  test("Capitalizes a string correctly with more than 1 letter", () => {
    expect(capitalize("ab")).toBe("Ab");
  });

  test("Does not affect non-string inputs", () => {
    expect(capitalize(1)).toBe(1);
  });
});

