function main() {
    people = [];
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function onSubmit(event) {
        event.preventDefault();
        
        const name = form.querySelector('._name');
        const lastName = form.querySelector('.lastName');
        const age = form.querySelector('.age');
        const weight = form.querySelector('.weight');
        
        const person = {
            name: name.value,  
            lastName: lastName.value,
            age: age.value,
            weight: weight.value
        }
        console.log(`person: ${person.name} ${person.lastName} ${person.age} ${person.weight}`);
        
        people.push(person);
        result.innerHTML += `<p>${person.name} ${person.lastName} ${person.age} ${person.weight}</p>`;
        console.log(people);
    }


    form.addEventListener('submit', onSubmit);

}
main();