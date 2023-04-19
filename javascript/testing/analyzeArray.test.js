import analyzeArray from "./analyzeArray";

describe('Array analysis', () => { 
    test("It returns an object", () => {
        expect(typeof analyzeArray([1])).toBe("object")
    });
    test("Minimum value works properly", () => {
        expect(analyzeArray([1,2,3]).min).toBe(1)
    })
    test("Maximum value works correctly", () => {
        expect(analyzeArray([1,2,3]).max).toBe(3);
    })
    test("Average works correctly", () => {
        expect(analyzeArray([1,2,3,4]).average).toBe(2.5);
    })
    test("Returns correct length", () => {
        expect(analyzeArray([1,2,3,4,5,6,7,8,9,10]).length).toBe(10);
    })
 })

