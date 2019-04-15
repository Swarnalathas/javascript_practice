function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let numLessOne = [];
  nums.forEach(element => {
    if (element < 1) {
      numLessOne.push(element);
    }
  });
  return numLessOne;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginChar = [];
  names.forEach(element => {
    if (char === element[0]) {
      namesBeginChar.push(element);
    }
  });
  return namesBeginChar;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let findVerbs = [];
  words.forEach(element => {
    let wordSplit = element.split(" ");
    if (wordSplit[0] === 'to') {
      findVerbs.push(wordSplit.join(' '));
    }
  });
  return findVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let checkNumInt = [];
  nums.forEach(element => {
    if (Number.isInteger(element)) {
      checkNumInt.push(element);
    }
  });
  return checkNumInt;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let getUserName = [];
  users.forEach(element => {
    let cityName = element.data.city.displayName;
    getUserName.push(cityName);
  });
  return getUserName;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqRootEachNum = [];
  nums.forEach(element => {
    let result = Math.sqrt(element);
    if (Number.isInteger(result)) {
      sqRootEachNum.push(result);
    } else {
      result = +result.toFixed(2);
      sqRootEachNum.push(result);
    }
  });
  return sqRootEachNum;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let searchSentences = [];
  sentences.forEach(element => {
    let regexp = new RegExp(str, 'i');
    if (regexp.test(element)) {
      searchSentences.push(element);
    }
  });
  return searchSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(element1 => {
    let greaterNum = 0;
    element1.forEach(element2 => {
      if (element2 > greaterNum) {
        greaterNum = element2;
      }
    });
    longestSides.push(greaterNum);
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
