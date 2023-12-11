const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removers = names.splice(3, 2, 'Removildo', 'Minazinha');

// console.log(names, removers);

// const myFilter = names.filter(obj => obj.length > 4);
// console.log(myFilter);

const persons = [
    { name: 'Raimundo', age: 44},
    { name: 'Igo', age: 23},
    { name: 'Estefany', age: 14},
    { name: 'Jonny', age: 19},
    { name: 'Estevan', age: 50},
    { name: 'Helder', age: 74},
];

// const filteredPeople = persons.filter( el => el.age > 20 );
const filteredPeople = persons.filter( el => el.name.toLowerCase().endsWith('o') );

// console.log(filteredPeople);

const numbers =  [ 2,5,33,89,45,3,22,11]

const double = numbers.map(n => n*2)
console.log(double);


