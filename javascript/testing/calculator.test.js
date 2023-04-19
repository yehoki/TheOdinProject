import Calculator from "./calulator";

describe("Calculator", () => {
  const calculator = new Calculator();
  describe("Add", () => {
    test("Adds two positive integers", () => {
      expect(calculator.add(1, 1)).toBe(2);
    });
    test("Adds two different integers", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test("Adds 0 to a non-zero integer", () => {
      expect(calculator.add(1, 0)).toBe(1);
    });
    test("Adds 0's together", () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
    test("Adds two negative integers correctly", () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });
    test("Adds a negative and a positive correctly", () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });
  });
  describe("Subtract", () => {
    test("Subtracts two positive integers", () => {
      expect(calculator.subtract(1, 1)).toBe(0);
    });
    test("Subtracts two negative integers", () => {
      expect(calculator.subtract(-1, -1)).toBe(0);
    });
    test("Subtracting zero does nothing", () => {
      expect(calculator.subtract(1, 0)).toBe(1);
    });
  });
  describe("Multiply", () => {
    test("Multiply 2 positive integers", () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });
    test("Multiply 2 negative integers", () => {
      expect(calculator.multiply(-3, -2)).toBe(6);
    });
    test("Multiplication by 0", () => {
      expect(calculator.multiply(0, 2)).toBe(0);
    });
  });
  describe("Divide", () => {
    test("Dividing a number by itself is one", () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });
    test("Dividing by zero is not allowed", () => {
        expect(calculator.divide(2, 0)).toBe(null);
    });
  });
});
