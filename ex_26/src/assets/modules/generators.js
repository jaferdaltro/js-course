const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpper = () => String.fromCharCode(rand(65, 91));
const generateLower = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '˜!@#$%ˆ&*?,><';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(size, upper, lower, number, symbol) {
    const passArray = [];
    size = Number(size) || 8;
    
    for(let i = 0; i < size; i++){
        upper && passArray.push(generateUpper())
        lower && passArray.push(generateLower())
        number && passArray.push(generateNumber())
        symbol && passArray.push(generateSymbol())
    }
    
    return passArray.join('').slice(0,size);
};