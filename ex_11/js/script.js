let fb = (n) => {
    if(n % 3 === 0 && n % 5 === 0){
        return 'FizzBuzz';  
    }else if(n % 5 === 0){
        return 'Buzz';
    }else if(n % 3 === 0 ){
        return 'Fizz';
    }else if(!isNaN(n)){
        return n
    }else{
        return n
    }

}

console.log(fb(5));