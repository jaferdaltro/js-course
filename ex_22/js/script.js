/*
    First create a constructor function,
    Second create 3 prototype methods - valid, createDigit, isSequence
    Third test.
*/

function CPFValidate(receivedCPF) {
  Object.defineProperty(this, 'clearCPF', {
    enumerable: true,
    get: () => receivedCPF.replace(/\D+/g, ''),
  });
}

CPFValidate.prototype.validate = function () {
  if (typeof this.clearCPF === 'undefined') return false;
  if (this.clearCPF.length !== 11) return false;

  const partial = this.clearCPF.slice(0, -2);
  const first = this.createDigit(partial);
  const second = this.createDigit(partial + first);
  const digits = first.toString() + second.toString(); 
  
  return this.clearCPF.slice(-2) === digits
};

CPFValidate.prototype.createDigit = function (partial) {
    let cpfPartial = Array.from(partial);
    let mult = cpfPartial.length + 1;
    
    const total = cpfPartial.reduce((ac, val) => {
        ac += Number(val) * mult;
        mult--;
        return ac;
    }, 0);
    
    const result = 11 - (total % 11)
    return result > 9 ? 0 : result;
};

CPFValidate.prototype.isSequence = function() {
    const sequency = this.clearCPF[0].repeat(this.clearCPF.length)
    return sequency === this.clearCPF;
}

const cpf = new CPFValidate('715.062.503-78');
console.log(cpf.validate()); 

