function main() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const imc = calculateIMC(inputWeight, inputHeight);
    console.log(imc);
    result.innerHTML = `Your IMC is ${imc}`;
  });

  function calculateIMC(inputWeight, inputHeight) {
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    console.log(!weight || !height);

    if (!weight || !height) return setResult('Invalid enters', false);

    const imc = (weight / height ** 2).toFixed(2);
    return getIMCLevel(imc);
  }

  function getIMCLevel (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = document.createElement('p');

    if (isValid) {
      p.classList.add('p-result');
    } else {
      p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
  }
}
main();
