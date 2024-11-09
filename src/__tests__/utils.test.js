

import isPalindrome from "../utils";

describe("isPalindrome", () => {
  test("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test("returns true for 'RaceCar' (case insensitive)", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must only contain alphabetic characters.");
  });

  test("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string.");
  });
});
