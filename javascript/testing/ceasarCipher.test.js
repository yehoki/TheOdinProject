import ceasarCipher from "./ceasarCipher";

describe("Ceasar Cipher", () => {
  test("Shifting works on a single letter", () => {
    expect(ceasarCipher("a", 1)).toBe("b");
  });
  test("Shifting works for uppercase letters", () => {
    expect(ceasarCipher("A", 1)).toBe("B");
  });
  test("No effect on non-letter characters", () => {
    expect(ceasarCipher("!2?~%  ")).toBe("!2?~%  ");
  });
});
