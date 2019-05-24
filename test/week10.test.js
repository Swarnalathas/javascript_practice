const {
    sumDigits,
    createRange
    
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

  describe("createRange",() =>{
    test("check the value of start is not empty", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
      });  
      test("check the value of end is not empty", () => {
        expect(() => {
            createRange(8);
        }).toThrow("end is required");
      });  
      test("return the range of numbers as an array",() => {
          expect(createRange(2,7)).toEqual([2,3,4,5,6,7]);
          expect(createRange(2,11,2)).toEqual([2,4,6,8,10]);
          expect(createRange(3,12,3)).toEqual([3,6,9,12]);
      });

  });