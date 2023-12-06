function showTime() {
  let date = new Date();

  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

const timer = setInterval(() => console.log(showTime()), 1000);
timer;

// setTimeout(()=>clearInterval(timer), 3000);

// setTimeout(()=>console.log('Hello World'), 5000);
