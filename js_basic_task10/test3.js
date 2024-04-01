import { assert, expect } from "chai";

describe("Test3 Describe", () => {

  it("Test3-1 String Concatenation", () => {
    const firstName = "Jack";
    const lastName = "London";
    const fullName = firstName + " " + lastName;
    expect(fullName).to.equal(
      "Jack London",
      "Error. Full name should correctly concatenate."
    );
  });

  it("Test3-2 Array Length", () => {
    const fruits = ["apple", "orange", "cherry"];
    expect(fruits).to.have.lengthOf(
      3,
      "Error. Array should contain exactly 3 elements."
    );
  });

  it("Test3-3 Square Root Calculation", () => {
    const number = 16;
    const squareRoot = Math.sqrt(number);
    expect(squareRoot).to.equal(4, "Error. The square root of 16 should be 4.");
  });
});
