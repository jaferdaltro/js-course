import generatePassword from './generators';

const generatedPass = document.querySelector('.generated-pass');
const qtCh = document.querySelector('.qt-ch');
const chkUppercase = document.querySelector('.chk-uppercase');
const chkLowercase = document.querySelector('.chk-lowercase');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const button = document.querySelector('.btn-generate');

export default () => {
  button.addEventListener(
    'click',
    () => (generatedPass.innerHTML = generate())
  );
};

function generate() {
  const pass = generatePassword(
    qtCh.value,
    chkUppercase.checked,
    chkLowercase.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );
  return pass || 'Select something'
}
