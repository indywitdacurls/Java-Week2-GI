// //Hard//


let iTomHeight= 9;
let iTomMass= 8;
let iJerryHeight= 10;
let iJerryMass= 45; 

const iTomBMI= iTomMass / iTomHeight ** 2;
const iJerryBMI= iJerryMass / iJerryHeight ** 2;

console.log(iTomBMI);   
console.log(iJerryBMI);

var bTomIsHeavier = iTomBMI > iJerryBMI;
console.log(`Tom's BMI is ${bTomIsHeavier ? 'greater' : 'less'} than Jerry's.`)