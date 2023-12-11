function multiCreator(mult){
    return function(n) {
        return n * mult;
    }
}

const duplicate = multiCreator(2);
const triplicate = multiCreator(3);
const quadruplicate = multiCreator(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplicate(2));