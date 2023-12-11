// function mathOperators(operator, acc, ...numbers){
//     for(let n of numbers){
//         if(operator === '+') acc += n;
//         if(operator === '-') acc -= n;
//         if(operator === '/') acc /= n;
//         if(operator === '*') acc *= n;
//     }
//     console.log(acc);
// }
// mathOperators('+', 1, 20, 30, 40 , 50);

// const mathOperators = function(operator, acc, ...numbers){
//     for(let n of numbers){
//         if(operator === '+') acc += n;
//         if(operator === '-') acc -= n;
//         if(operator === '/') acc /= n;
//         if(operator === '*') acc *= n;
//     }
//     console.log(acc);
// }
// mathOperators('+', 1, 20, 30, 40 , 50);

// const mathOperators = (operator, acc, ...numbers) => {
//     console.log(numbers);
//     console.log(arguments);
// }
// mathOperators('+', 1, 20, 30, 40 , 50);

const mathOperators = (...args) => {
    console.log(args);
    // console.log(arguments);
}
mathOperators('+', 1, 20, 30, 40 , 50);