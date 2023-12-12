const people = [
  {id: 3, name: 'Liz'},
  {id: 2, name: 'Mary'},
  {id: 1, name: 'Helen'},
]

// const newPeople = {};

// for (let {id, name} of people){
//   newPeople[id] = { id, name }
// }

// for (let person of people){
//   const { id } = person;
//   newPeople[id] = { ...person }
// }

// console.log(newPeople);

//  USING Map()

const newPeople = new Map();

for (let person of people){
  const { id } = person;
  newPeople.set(id, { ...person }); 
}

console.log(newPeople.get(2));

for(const [identifier, { id, name }] of newPeople){
  console.log(identifier, id, name)
}

newPeople.delete(2);

console.log(newPeople);
