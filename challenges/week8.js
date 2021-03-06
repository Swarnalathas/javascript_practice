const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let findNumber = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      if (i === nums.length - 1) {
        findNumber = null;
      } else {
        findNumber = nums[i + 1];
        break;
      }
    }
  }
  return findNumber;
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const countNumbers = { 1: 0, 0: 0 };

  for (let i = 0; i < str.length; i++) {
    countNumbers[Number(str[i])] += 1;
  }
  return countNumbers;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const str = n.toString().split('');
  [str[0], str[str.length - 1]] = [str[str.length - 1], str[0]];
  const strRev = str.join('');
  return Math.sign(n) * parseInt(strRev);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.map(element => {
    element.map(ele => {
      sum = sum + ele;
    })
  });
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let arrRev = arr.reverse();
  return arrRev;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  searchTerm = searchTerm.toLowerCase();

  for (let propertyName in haystack) {
    const propertyValue = haystack[propertyName];

    if (typeof propertyValue === "string") {

      if (propertyValue.toLowerCase().includes(searchTerm)) {

        return true;
      }
    }

  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  str = str.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();

  let wordFrequencies = str.split(' ');

  const frequencies = {};
  for (let i = 0; i < wordFrequencies.length; i++) {
    let char = wordFrequencies[i];

    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char] += 1;
    }
  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
