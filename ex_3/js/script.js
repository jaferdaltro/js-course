const number = Number(prompt('type a text'));
const firstElement = document.getElementById('firstElement');
firstElement.innerHTML = `<p>${number ** 2}</p>`
