const {
    sumDigits
    
  } = require("../challenges/week10");

  describe("sumDigits",() => {
    test("check the value of number is not empty", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
      });  
    
    test("returns the sum of all its digits",()=> {
          expect(sumDigits(123)).toBe(6);
          expect(sumDigits(3498)).toBe(24);
          expect(sumDigits(0)).toBe(0);
      });  

  });