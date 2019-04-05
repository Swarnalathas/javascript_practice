function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  let numSquare = [];
  nums.forEach(element => {
    return numSquare.push(Math.pow(element, 2));
  });
  return numSquare;
}


function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  let caseWords = [];
  words.forEach(function (element, i) {
    if (i === 0) {
      caseWords.push(element);
    } else {
      let upperCase = element.charAt(0).toUpperCase() + element.slice(1);
      caseWords.push(upperCase);
    }
  });
  return caseWords.join('');
}


function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  let peopleSujects = 0;
  people.forEach(element => {
    peopleSujects += element.subjects.length;
    return peopleSujects;
  });
  return peopleSujects;
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
