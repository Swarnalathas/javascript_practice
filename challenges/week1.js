function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  var firstCapLetter = word.charAt(0).toUpperCase() + word.slice(1);
  return firstCapLetter;  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  var genarateInitials = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
 return genarateInitials;

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const addVatToTotal =  (originalPrice /100 ) * vatRate ;
  const totalAmt = originalPrice + addVatToTotal;
  return Number.isInteger(totalAmt)? totalAmt : +totalAmt.toFixed(2);
  
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const reducePrice =  (originalPrice/100) * reduction;
  const totalAmtReduce = originalPrice - reducePrice;
  return Number.isInteger(totalAmtReduce)? totalAmtReduce : +totalAmtReduce.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var checkMidString = str.length / 2;
  if (str.length % 2  === 0){
    return (str.slice(checkMidString-1, checkMidString+1));
  } else{
    return str.slice(checkMidString, checkMidString + 1);
  }  
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join('');
   
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reverseWords = [];
  words.forEach(element => {
    reverseWords.push(reverseWord(element));
  });
  
  return reverseWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
   return users.filter(element => {
              return (element.type === 'Linux');
          }).length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var totalScores = 0;
  scores.forEach(element => {
    totalScores = totalScores + element;
  });
  var meanScore = totalScores/scores.length;

  return Number.isInteger(meanScore)? meanScore : +meanScore.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if ((n % 3 === 0) && (n % 5 === 0)){
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  }
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
