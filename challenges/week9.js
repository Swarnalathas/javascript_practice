/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr is required");
  let count = 0;
  arr.forEach(n => {
    if (n % 3 === 0 || n % 5 === 0) {
      count = count + n;
    }
  });
  return count;
};

/**
 * This function will receive a string of characters
 *  and should return true/false depending on whether 
 * it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!str) throw new Error("str is required");
  if (typeof (str) !== "string") throw new Error("String is requried");
  let dna = ['A', 'T', 'G', 'C'];
  let result = str.split('');
  let dnaResult = true;
  result.forEach(n => {
    if (!dna.includes(n)) {
      dnaResult = false;
    }
  });
  return dnaResult;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string 
 * of the complementary base pairs.
 *  In DNA, T always pairs with A, and C always pairs with G.
 *  So a string of "ACTG" would have a complementary DNA string of "CAGT".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (!str) throw new Error("str is required");
  if (!isValidDNA(str)) throw new Error("String should be combination of Valid DNA Pairs");
  str = str.split('');
  let dna = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
  let complementaryDNA = '';
  str.forEach(n => {
    complementaryDNA = complementaryDNA + dna[n];
  });
  return complementaryDNA;
};


/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. 
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (!n) throw new Error("n is required");
  if (n === 0 || n === 1) {
    return true;
  }
  for (let i = 2; i < n; i++)
    if (n % i === 0) {
      return false;
    }
  return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays,
 *  each filled with n items. The parameter "fill" should be used as the filler of the arrays. 
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!n) throw new Error("n is required");
  if (!fill) throw new Error("fill is required");
  let matrixArray = [];

  for (let i = 0; i < n; i++) {
    let innerMatrix = [];
    for (let i = 0; i < n; i++) {
      innerMatrix.push(fill);
    }
    matrixArray.push(innerMatrix);
  }
  return matrixArray;
};


/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, 
 * at least 3 staff members are required per day. The function should return 
 * true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!staff) throw new Error("staff is required");
  if (!day) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
