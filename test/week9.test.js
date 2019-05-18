const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix

} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("Check if the input value of Arr is Empty", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });

    test("Check if the input value of Arr is Array", () => {
        expect(() => {
            sumMultiples(456);
        }).toThrow("arr is required");
        
        expect(() => {
            sumMultiples("Hello");
        }).toThrow("arr is required");  
    });

    test("return the sum of any numbers which are a multiple of 3 or 5 ", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });

    test("return zero if doesn't have 3 and 5", () => {
        expect(sumMultiples([1, 2, 7, 8])).toBe(0);
    });

    test("Check with decimal Values", () => {
        expect(sumMultiples([1, 3.0, 5.0, 6, 0, 12])).toBe(26);
    });
});

describe("isValidDNA", () => {
    test("check the value of str is not empty", () => {
        expect(() => {
            isValidDNA("");
        }).toThrow("str is required");         
    });

    test("Check the value of str is not number or array", () => {
        expect(() => {
            isValidDNA(123);
        }).toThrow("String is requried");  
        expect(() => {
            isValidDNA(["ACG"]);
        }).toThrow("String is requried");         
    });

    test("return true if any of the value of C, G, T or A only in the String", () => {
        expect(isValidDNA("ACGT")).toBe(true);
        expect(isValidDNA("GTAA")).toBe(true);
        expect(isValidDNA("TACC")).toBe(true);
    });
    

    test("return false if any of the value of C, G, T or A not in the String", () => {
        expect(isValidDNA("XYZA")).toBe(false);
        expect(isValidDNA("AWCG")).toBe(false);
        expect(isValidDNA("TWGT")).toBe(false);

    });
});


describe("getComplementaryDNA", () => {
    test("check the value of str is not empty", () => {
        expect(() => {
            getComplementaryDNA("");
        }).toThrow("str is required");         
    });

    test("Check the value of str is not number or array", () => {
        expect(() => {
            getComplementaryDNA(123);
        }).toThrow("String is requried");  
        expect(() => {
            isValidDNA(["ACG"]);
        }).toThrow("String is requried");         
    });

    test("Check the value of str is combination of DNA pairs", () => {
        expect(() => {
            getComplementaryDNA("ATXY");
        }).toThrow("String should be combination of Valid DNA Pairs");               
    });

    test("return Complementary base DNA", () => {
        expect(getComplementaryDNA("ACGT")).toBe("TGCA");
        expect(getComplementaryDNA("GTAA")).toBe("CATT");
        expect(getComplementaryDNA("TACC")).toBe("ATGG");
    });
 
});

describe("isItPrime",()=> {
    test("check the Number is not empty", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");         
    });

    test("return true if the given number is prime Number", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(17)).toBe(true);              
    });

    test("return false if the given number is not prime Number", () => {
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(66)).toBe(false);              
    });

});

describe("createMatrix",() => {
    test("check the number is not empty", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");         
    });

    test("Check the fill value is not empty", () => {
        expect(() => {
            createMatrix(4,"");
        }).toThrow("fill is required");  
               
    });
    test("return an array of n arrays,each filled with n items", () => {
        expect(createMatrix(2,"foo")).toEqual([ [ 'foo', 'foo' ], [ 'foo', 'foo' ] ]);
        expect(createMatrix(3,"XYZ")).toEqual([ [ 'XYZ', 'XYZ', 'XYZ' ],[ 'XYZ', 'XYZ', 'XYZ' ],[ 'XYZ', 'XYZ', 'XYZ' ] ]);
        expect(createMatrix(3,33)).toEqual([ [ 33, 33, 33 ], [ 33, 33, 33 ], [ 33, 33, 33 ] ]);
    });

});