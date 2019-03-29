function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;  
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester" ;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");  
  return people % 40 === 0 ? Number.parseInt(people / 40) : (Number.parseInt(people/40) + 1);
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  let count = 0;
  arr.forEach(element => {    
     if(element === "sheep") {
       count++;
     }     
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");  
  return person.address.postCode[0] === "M" && person.address.city === "Manchester";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
