const {
    sumDigits,
    createRange,
    getScreentimeAlertList

} = require("../challenges/week10");

describe("sumDigits", () => {
    test("check the value of number is not empty", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });

    test("returns the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(3498)).toBe(24);
        expect(sumDigits(0)).toBe(0);
    });
});

describe("createRange", () => {
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
    test("return the range of numbers as an array", () => {
        expect(createRange(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
        expect(createRange(2, 11, 2)).toEqual([2, 4, 6, 8, 10]);
        expect(createRange(3, 12, 3)).toEqual([3, 6, 9, 12]);
    });

});

describe("getScreentimeAlertList", () => {
    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 66, facebook: 61 } }
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 10, whatsApp: 20, facebook: 70, safari: 31 } }
            ]
        },
        {
            username: "jim_3456",
            name: "Jim Bash",
            screenTime: [
                { date: "2019-06-05", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 10, whatsApp: 57, facebook: 20, safari: 16 } }
            ]
        }

    ];
    test("check the users is not empty", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
    });

    test("check the date is not empty", () => {
        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");
    });

    test("return an array of usernames of users who have used more than 100 mins of screentime for a given date", () => {
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["sam_j_1989", "jim_3456"]);

    });

    test("return empty array if the user watched screentime less the 100 min on the given date",() => {
        expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
    });

});