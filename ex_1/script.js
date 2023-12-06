let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// Old way
// let aux = varA;
// varA = varB;
// varB = varC;
// varC = aux;

// Modern way 
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
